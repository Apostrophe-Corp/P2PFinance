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
	tokLoan: Token,
	address: Address,
})

export const main = Reach.App(() => {
	const B = Participant('B', {
		getParams: Fun([], ParamsType),
		created: Fun([UInt], Null),
	})
	const Lender = API('Lender', {
		lend: Fun([], Bool),
		claim: Fun([], Null),
	})
	const Borrower = API('Borrower', {
		close: Fun([], Null),
		repay: Fun([UInt], Tuple(Bool, UInt, UInt)),
		claimRefund: Fun([], Null),
	})

	const LoanViews = View('LoanViews', {
		isLive: Bool,
		loanPaid: Bool,
		amountPaid: UInt,
		beginBlock: UInt,
	})

	init()

	B.only(() => {
		const { tokLoan, collateral, ...loanInfo } = declassify(
			interact.getParams()
		)
		assume(loanInfo.principal < loanInfo.amount)
	})
	B.publish(tokLoan, collateral, loanInfo)
	require(loanInfo.principal < loanInfo.amount)
	commit()
	B.pay(collateral)
	B.interact.created(thisConsensusTime())

	const [loanAccepted, lender, isLive] = parallelReduce([false, B, true])
		.invariant(balance() == collateral, 'Collateral balance not right')
		.invariant(
			balance(tokLoan) == (loanAccepted ? loanInfo.principal : 0),
			'Loan balance not right'
		)
		.define(() => {
			LoanViews.isLive.set((!loanAccepted && isLive) || loanAccepted)
		})
		.paySpec([tokLoan])
		.while(!loanAccepted && isLive)
		.api_(Lender.lend, () => {
			return [
				[0, [loanInfo.principal, tokLoan]],
				(notify) => {
					notify(true)
					const who = this
					return [true, who, isLive]
				},
			]
		})
		.api(Borrower.close, (ret) => {
			ret(null)
			return [loanAccepted, lender, false]
		})
	if (!loanAccepted) {
		transfer(balance()).to(B)
		commit()
		exit()
	} else {
		transfer(balance(tokLoan), tokLoan).to(B)

		const beginBlock = thisConsensusTime()
		const end_ = beginBlock + loanInfo.maturation
		LoanViews.beginBlock.set(beginBlock)
		const amountPaid = parallelReduce(0)
			.invariant(balance() == collateral, 'Collateral balance not right')
			.invariant(balance(tokLoan) == amountPaid, 'Loan balance not right')
			.invariant(
				amountPaid <= loanInfo.amount,
				'Amount paid is greater than repayment amount'
			)
			.define(() => {
				LoanViews.loanPaid.set(amountPaid >= loanInfo.amount)
				LoanViews.amountPaid.set(amountPaid)
			})
			.paySpec([tokLoan])
			.while(thisConsensusTime() < end_ && amountPaid < loanInfo.amount)
			.api_(Borrower.repay, (amt) => {
				check(this == B, 'You are not the Borrower')
				check(thisConsensusTime() <= end_, 'Its past the deadline')
				const excess =
					amt + amountPaid > loanInfo.amount
						? amt + amountPaid - loanInfo.amount
						: 0
				const payAmt = amt - excess
				return [
					[0, [payAmt, tokLoan]],
					(notify) => {
						const totalPaid = amountPaid + payAmt
						notify([totalPaid >= loanInfo.amount, totalPaid, loanInfo.amount])
						return totalPaid
					},
				]
			})
			.api(Borrower.claimRefund, (ret) => {
				ret(null)
				return amountPaid
			})
			.api(Lender.claim, (ret) => {
				ret(null)
				return amountPaid
			})

		transfer(balance()).to(amountPaid < loanInfo.amount ? lender : B)
		transfer(balance(tokLoan), tokLoan).to(
			amountPaid < loanInfo.amount ? B : lender
		)

		commit()
		exit()
	}
})
