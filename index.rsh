/* eslint-disable no-undef */
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
	const Borrower = Participant('Borrower', {
		getParams: Fun([], ParamsType),
	})

	const Lender = API('Lender', {
		lend: Fun([], Bool),
	})

	const Borrowers = API('Borrowers', {
		repay: Fun([UInt], UInt),
	})

	const LoanViews = View('LoanViews', {
		loanPaid: Bool,
		amountPaid: UInt,
	})

	init()

	Borrower.only(() => {
		const { tokCollateral, tokLoan, collateral, ...loanInfo } = declassify(
			interact.getParams()
		)
		assume(loanInfo.principal < loanInfo.amount)
		assume(tokCollateral != tokLoan)
	})

	Borrower.publish(tokCollateral, tokLoan, collateral, loanInfo)
	require(loanInfo.principal < loanInfo.amount)
	commit()

	Borrower.pay([[collateral, tokCollateral]])

	const [_, advertIsLive] = makeDeadline(ADVERTDEADLINE)
	const [loanAccepted, lender] = parallelReduce([false, Borrower])
		.invariant(balance(tokCollateral) == collateral)
		.invariant(balance(tokLoan) == (loanAccepted ? loanInfo.principal : 0))
		.while(advertIsLive() && !loanAccepted)
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
		transfer(balance(tokCollateral), tokCollateral).to(Borrower)
		transfer(balance()).to(Borrower)
		commit()
		exit()
	}

	const currentTokLoanBal = balance(tokLoan)
	const [q_, keepGoing] = makeDeadline(loanInfo.maturation)
	const amountPaid = parallelReduce(0)
		.invariant(balance(tokCollateral) == collateral)
		.invariant(balance(tokLoan) == currentTokLoanBal + amountPaid)
		.define(() => {
			LoanViews.loanPaid.set(amountPaid >= loanInfo.amount)
			LoanViews.amountPaid.set(amountPaid)
		})
		.while(keepGoing() && amountPaid < loanInfo.amount)
		.api_(Borrowers.repay, (amt) => {
			check(this == loanInfo.address, 'You are not the Borrower')
			return [
				[0, [amt, tokLoan]],
				(notify) => {
					notify(amountPaid)
					return amountPaid + amt
				},
			]
		})

	transfer(balance(tokCollateral), tokCollateral).to(
		amountPaid < loanInfo.amount ? lender : Borrower
	)
	transfer(balance(tokLoan), tokLoan).to(
		amountPaid < loanInfo.amount ? Borrower : lender
	)
	transfer(balance()).to(Borrower)

	commit()
	exit()
})
