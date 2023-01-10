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
	address: Address,
})

export const main = Reach.App(() => {
	const B = Participant('B', {
		getParams: Fun([], ParamsType),
		created: Fun([UInt], Null),
	})
	const Lender = API('Lender', {
		lend: Fun([], Bool),
	})
	const Borrower = API('Borrower', {
		close: Fun([], Null),
		repay: Fun([UInt], Tuple(Bool, UInt, UInt)),
	})

	const LoanViews = View('LoanViews', {
		isLive: Bool,
		loanPaid: Bool,
		amountPaid: UInt,
	})

	init()

	B.only(() => {
		const { collateral, ...loanInfo } = declassify(interact.getParams())
		assume(loanInfo.principal < loanInfo.amount)
	})
	B.publish(collateral, loanInfo)
	require(loanInfo.principal < loanInfo.amount)
	commit()
	B.pay(collateral)
	B.interact.created(thisConsensusTime())

	const [loanAccepted, lender, isLive] = parallelReduce([false, B, true])
		.invariant(
			balance() == (loanAccepted ? loanInfo.principal : 0) + collateral,
			'Contract balance not right'
		)
		.define(() => {
			LoanViews.isLive.set(!loanAccepted && isLive)
		})
		.while(!loanAccepted && isLive)
		.api_(Lender.lend, () => {
			return [
				loanInfo.principal,
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
		transfer(loanInfo.principal).to(B)

		const end_ = thisConsensusTime() + loanInfo.maturation
		const amountPaid = parallelReduce(0)
			.invariant(
				balance() == amountPaid + collateral,
				'Contract balance not right'
			)
			.invariant(
				amountPaid <= loanInfo.amount,
				'Amount paid is greater than repayment amount'
			)
			.define(() => {
				LoanViews.loanPaid.set(amountPaid >= loanInfo.amount)
				LoanViews.amountPaid.set(amountPaid)
			})
			.while(thisConsensusTime() <= end_ && amountPaid < loanInfo.amount)
			.api_(Borrower.repay, (amt) => {
				check(this == B, 'You are not the Borrower')
				const excess =
					amt + amountPaid > loanInfo.amount
						? amt + amountPaid - loanInfo.amount
						: 0
				const payAmt = amt - excess
				return [
					payAmt,
					(notify) => {
						const totalPaid = amountPaid + payAmt
						notify([totalPaid >= loanInfo.amount, totalPaid, loanInfo.amount])
						return totalPaid
					},
				]
			})

		transfer(collateral).to(amountPaid < loanInfo.amount ? lender : B)
		transfer(balance()).to(amountPaid < loanInfo.amount ? B : lender)

		commit()
		exit()
	}
})
