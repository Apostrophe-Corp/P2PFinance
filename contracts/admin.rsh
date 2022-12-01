/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1'

const SUPPLY = 1000000

export const main = Reach.App(() => {
	const Admin = Participant('Admin', {
		loyaltyToken: Token,
	})

	const A = API('A', {
		sendLoyaltyToken: Fun([Address], Bool),
	})

	init()

	Admin.only(() => {
		const loyaltyToken = declassify(interact.loyaltyToken)
	})

	Admin.publish(loyaltyToken)
	commit()
	Admin.pay([[SUPPLY, loyaltyToken]])

	const [keepRunning, trackedSupply] = parallelReduce([true, SUPPLY])
		.invariant(balance() == 0)
		.invariant(balance(loyaltyToken) == trackedSupply)
		.while(keepRunning)
		.api(A.sendLoyaltyToken, (user, notify) => {
			if (balance(loyaltyToken) >= 5) {
				transfer([[5, loyaltyToken]]).to(user)
				notify(true)
				return [true, trackedSupply - 5]
			} else {
				notify(false)
				return [true, trackedSupply]
			}
		})

    transfer(balance()).to(Admin)
    transfer(balance(loyaltyToken), loyaltyToken).to(Admin)
	commit()
	exit()
})
