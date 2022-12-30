/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const ParamsType = Object({
	collateral: UInt,
	principal: UInt,
	amount: UInt,
	maturation: UInt,
	tokCollateral: Token,
	tokLoan: Token,
	address: Address,
})

const ADVERTDEADLINE = 50

export const main = Reach.App(() => {
	const B = Participant('B', {
		getParams: Fun([], ParamsType),
		created: Fun([UInt], Null),
	})
	const Lender = API('Lender', {
		lend: Fun([], Bool),
	})
	const Borrower = API('Borrower', {
		repay: Fun([UInt], UInt),
	})

	const LoanViews = View('LoanViews', {
		loanPaid: Bool,
		amountPaid: UInt,
	})

	init()

	B.only(() => {
		const { tokCollateral, tokLoan, collateral, ...loanInfo } = declassify(
			interact.getParams()
		)
		assume(loanInfo.principal < loanInfo.amount)
		assume(tokCollateral != tokLoan)
	})
	B.publish(tokCollateral, tokLoan, collateral, loanInfo)
	require(loanInfo.principal < loanInfo.amount)
	commit()
	B.pay([[collateral, tokCollateral]])
	B.interact.created(thisConsensusTime())

	const end = thisConsensusTime() + ADVERTDEADLINE
	const [loanAccepted, lender] = parallelReduce([false, B])
		.invariant(
			balance(tokCollateral) == collateral,
			'Collateral balance not right'
		)
		.invariant(
			balance(tokLoan) == (loanAccepted ? loanInfo.principal : 0),
			'Loan balance not right'
		)
		.while(thisConsensusTime() <= end && !loanAccepted)
		.api_(Lender.lend, () => {
			return [
				[0, [loanInfo.principal, tokLoan]],
				(notify) => {
					notify(true)
					const who = this
					return [true, who]
				},
			]
		})
	if (!loanAccepted) {
		transfer(balance(tokCollateral), tokCollateral).to(B)
		transfer(balance()).to(B)
		commit()
		exit()
	} else {
		transfer(balance(tokLoan), tokLoan).to(B)
	}

	const end_ = thisConsensusTime() + loanInfo.maturation
	const amountPaid = parallelReduce(0)
		.invariant(
			balance(tokCollateral) == collateral,
			'Collateral balance not right'
		)
		.invariant(balance(tokLoan) == amountPaid, 'Loan balance not right')
		.invariant(
			amountPaid <= loanInfo.amount,
			'Amount paid is greater than repayment amount'
		)
		.define(() => {
			LoanViews.loanPaid.set(amountPaid >= loanInfo.amount)
			LoanViews.amountPaid.set(amountPaid)
		})
		.while(thisConsensusTime() <= end && amountPaid < loanInfo.amount)
		.api_(Borrower.repay, (amt) => {
			check(this == B, 'You are not the Borrower')
			const excess =
				amt + amountPaid > loanInfo.amount
					? amt + amountPaid - loanInfo.amount
					: 0
			const payAmt = amt - excess
			return [
				[0, [payAmt, tokLoan]],
				(notify) => {
					notify(amountPaid)
					return amountPaid + payAmt
				},
			]
		})

	transfer(balance(tokCollateral), tokCollateral).to(
		amountPaid < loanInfo.amount ? lender : B
	)
	transfer(balance(tokLoan), tokLoan).to(
		amountPaid < loanInfo.amount ? B : lender
	)
	transfer(balance()).to(B)

	commit()
	exit()
})
