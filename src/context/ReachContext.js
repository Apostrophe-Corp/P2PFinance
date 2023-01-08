import React, { useState } from 'react'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_MakePeraConnect as MakePeraConnect,
	ALGO_PeraConnect as PeraConnect,
	unsafeAllowMultipleStdlibs,
	// ALGO_MakeWalletConnect as MakeWalletConnect,
} from '@reach-sh/stdlib'
import { PeraWalletConnect } from '@perawallet/connect'
// import WalletConnect from '@walletconnect/client'
// import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import {
	loanCtc,
	//  adminCtc
} from '../contracts'
import { request, fmtCurrency, getASAInfo } from '../utils'
import { Alert } from '../components/Alert'
import { ConnectAccount } from '../components/ConnectAccount'
import { LoadingPreview } from '../components/LoadingPreview'

const reach = loadStdlib({
	...process.env,
	REACH_NO_WARN: 'Y',
	REACH_CONNECTOR_MODE: 'ALGO',
})

unsafeAllowMultipleStdlibs()
const providerEnv = 'TestNet'

const waitingPro = {}

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})
	// const [adminConnection, setAdminConnection] = useState(null)

	const [promiseOfConfirmation, setPromiseOfConfirmation] = useState({})

	const [[showPreloader, setShowPreloader], [processing, setProcessing]] = [
		useState(false),
		useState(false),
	]

	const [showConnectAccount, setShowConnectAccount] = useState(false)

	const [[alertInfo, setAlertInfo], [showAlert, setShowAlert]] = [
		useState({
			message: 'Confirm Action',
			accept: 'Yes',
			decline: 'No',
			forConfirmation: true,
			prompt: false,
		}),
		useState(false),
	]

	const [adverts, setAdverts] = useState([])
	const [userAdverts, setUserAdverts] = useState([])
	const [borrowedLoans, setBorrowedLoans] = useState([])
	const [loanedLoans, setLoanedLoans] = useState([])

	const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))

	const alertThis = async ({
		message = 'Confirm Action',
		accept = 'Yes',
		decline = 'No',
		forConfirmation = true,
		prompt = false,
		persist = false,
		neutral = false,
		callback = null,
		canClear = false,
	} = {}) => {
		await sleep(300)
		promiseOfConfirmation?.resolve && promiseOfConfirmation.resolve()
		const result = await new Promise((resolve, reject) => {
			setPromiseOfConfirmation({ resolve, reject })
			setAlertInfo((previous) => ({
				message,
				accept,
				decline,
				forConfirmation,
				prompt,
				persist,
				neutral,
				callback,
				canClear,
			}))
			setShowAlert((lastState) => true)
		}).catch((message) => setShowAlert((lastState) => false))
		if (result === undefined) setShowAlert((lastState) => false)
		return result
	}

	const startWaiting = async (monitor = true) => {
		const shouldDisplay = (display) => {
			setShowPreloader(display)
			if (display) setProcessing(display)
		}
		let waiter = undefined
		try {
			await new Promise((resolve, reject) => {
				waitingPro['resolve'] = resolve
				waitingPro['reject'] = reject
				shouldDisplay(true)
				if (monitor) {
					waiter = setTimeout(() => {
						alertThis({
							message: `This process is taking longer than expected. Please consider clearing the cookies used by this site, refresh and reconnect your wallet, then try this again if need be`,
							forConfirmation: false,
						})
						clearTimeout(waiter)
					}, 120000)
				}
			})
			shouldDisplay(false)
		} catch (error) {
			shouldDisplay(false)
		}
		if (monitor) {
			clearTimeout(waiter)
			waiter = undefined
		}
	}

	const stopWaiting = (mode = true) => {
		if (mode && waitingPro.resolve) waitingPro.resolve()
		else if (waitingPro.reject) waitingPro.reject()
	}

	const connectToWallet = async (
		walletPreference,
		mnemonic = false,
		secret = ''
	) => {
		startWaiting()
		delete window.algorand
		const instantReach = loadStdlib(process.env)
		switch (walletPreference) {
			case 'PeraConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({
						providerEnv,
						WalletConnect: MakePeraConnect(PeraWalletConnect),
					})
				)
				break
			case 'MyAlgoConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, MyAlgoConnect })
				)
				break
			case 'WalletConnect':
				instantReach.setWalletFallback(
					// instantReach.walletFallback({
					// 	providerEnv,
					// 	WalletConnect: MakeWalletConnect(WalletConnect, QRCodeModal),
					// })
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
			case 'Mnemonic':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, PeraConnect })
				)
				break
			default:
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
		}
		try {
			const account = mnemonic
				? await instantReach.newAccountFromMnemonic(secret)
				: await instantReach.getDefaultAccount()
			setUser({
				account,
				balance: async (tokenID = null) => {
					const balAtomic = tokenID
						? await reach.balanceOf(account, tokenID)
						: await reach.balanceOf(account)
					const balance = reach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: instantReach.formatAddress(account.getAddress()),
			})
			setShowConnectAccount(false)
			stopWaiting()
			alertThis({
				message: 'Connection to wallet was successful',
				forConfirmation: false,
			})
		} catch (error) {
			console.error({ error })
			stopWaiting(false)
			alertThis({
				message:
					'An error occurred, unable to connect to wallet. Please try again',
				forConfirmation: false,
			})
		}
	}

	const lend = async (id, loanCtcInfo, loanAmount, asset) => {
		const assetInfo = await getASAInfo(Number(asset))
		const res = await request({
			path: `loans/${id}`,
		})
		if (res.success) {
			if (res.loan?.lender === '') {
				if (!(await user.account.tokenAccepted(Number(asset)))) {
					alertThis({
						message: 'Please confirm the opt-in of the collateral ASA on your wallet',
						forConfirmation: false,
						persist: true,
					})
					try {
						await user.account.tokenAccept(Number(asset))
						alertThis({
							message: 'Opt-In confirmed',
							forConfirmation: false,
							persist: true,
						})
						await new Promise((resolve) => setTimeout(resolve, 2000))
					} catch (error) {
						console.log({ error })
						alertThis({
							message:
								'Opt-In failed and as such you cannot give this loan. But you can try again',
							forConfirmation: false,
						})
						return
					}
				}
				let rewardSent = false
				const userAssetBalance = await reach.balanceOf(user.account, asset)
				const enough =
					userAssetBalance >= (await fmtCurrency(asset, loanAmount))

				if (!enough) {
					alertThis({
						message: `Your balance of asset: ${assetInfo?.name}, ASA ID: #${asset} - ${userAssetBalance}, is insufficient for the loan amount of: ${loanAmount}`,
						forConfirmation: false,
					})
					return
				}
				const agreed = await alertThis({
					message: `You're about to lend ${loanAmount} of asset: ${assetInfo?.name}, ASA ID: #${asset}. Proceed?`,
					accept: 'Yes',
					decline: 'No',
				})

				if (!agreed) return

				startWaiting()
				try {
					const ctc = user.account.contract(loanCtc, JSON.parse(loanCtcInfo))
					await ctc.a.Lender.lend()

					const res = await request({
						path: `loans/${id}`,
						method: 'PATCH',
						body: {
							lender: String(user.address),
						},
					})

					// try {
					// 	rewardSent = await adminConnection.apis.A.sendLoyaltyToken(user.address)
					// } catch (error) {
					// 	console.log({ error })
					// }

					stopWaiting()
					if (res.success) {
						const presentAdverts = adverts
						const remainingAdverts = presentAdverts.filter((el) => el.id !== id)
						setAdverts([...remainingAdverts])
						alertThis({
							message: `Success!${
								rewardSent ? ` You've also received some loyalty tokens` : ''
							}`,
							forConfirmation: false,
						})
					} else {
						alertThis({
							message: `Failed to upload your address information. Note: This does not affect the contract. Error message: ${res.error.message}`,
							forConfirmation: false,
						})
					}
				} catch (error) {
					console.log({ error })
					stopWaiting()
					alertThis({
						message: 'Unable to process your request',
						forConfirmation: false,
					})
				}
			} else {
				const presentAdverts = adverts
				const remainingAdverts = presentAdverts.filter((el) => el.id !== id)
				setAdverts([...remainingAdverts])
				alertThis({
					message:
						"Woah!!! Isn't this fascinating, someone just lend to this advert",
					forConfirmation: false,
				})
			}
		}
	}

	const repay = async (id, loanCtcInfo, asset) => {
		const assetInfo = await getASAInfo(Number(asset))
		const payAmountIn = await alertThis({
			message: 'Enter the repay amount',
			prompt: true,
			callback: (x) => !isNaN(x),
			canClear: true,
		})
		if (payAmountIn === undefined) return null
		const payAmount = await fmtCurrency(asset, Number(payAmountIn))

		const userAssetBalance = await reach.balanceOf(user.account, asset)
		const enough = userAssetBalance >= payAmount

		if (!enough) {
			alertThis({
				message: `Your balance of asset: ${assetInfo?.name}, ASA ID: #${asset} - ${userAssetBalance}, is insufficient for a repayment of: ${payAmount}`,
				forConfirmation: false,
			})
			return
		}
		const agreed = await alertThis({
			message: `You're about to repay ${payAmountIn} of asset: ${assetInfo?.name}, ASA ID: #${asset}. Please note any excess amount would be removed before the payment transaction. Proceed?`,
			accept: 'Yes',
			decline: 'No',
		})

		if (!agreed) return

		startWaiting()
		try {
			let res = undefined
			const ctc = user.account.contract(loanCtc, JSON.parse(loanCtcInfo))
			const [repaid, paid, original] = await ctc.a.Borrower.repay(payAmount)
			const [paid_] = [
				reach.bigNumberToNumber(paid),
				// reach.bigNumberToNumber(original),
			]
			// console.log({ repaid, paid_, original_ })
			if (repaid || paid_ >= original) {
				res = await request({
					path: `loans/${id}`,
					method: 'PATCH',
					body: {
						resolved: true,
					},
				})
				stopWaiting()
				if (res.success) {
					alertThis({
						message: `Success!`,
						forConfirmation: false,
					})
				} else {
					alertThis({
						message: `Failed to update your information on the server. Error message: ${res.error.message}`,
						forConfirmation: false,
					})
				}
			} else {
				stopWaiting()
				alertThis({
					message: `Success!`,
					forConfirmation: false,
				})
			}
		} catch (error) {
			console.log({ error })
			stopWaiting()
			alertThis({
				message: 'Unable to process your request',
				forConfirmation: false,
			})
		}
	}

	const checkForSignIn = async (func) => {
		if (!user.account) {
			const connect = await alertThis({
				message: 'Connect your wallet and try that again',
				accept: 'Connect now',
				decline: 'Not now',
			})

			if (connect) {
				setShowConnectAccount(true)
			}
			return
		} else {
			func()
		}
	}

	const create = async (loanParams) => {
		startWaiting()
		let success = false
		const userBal = await reach.balanceOf(
			user.account,
			Number(loanParams['tokenOffered'])
		)

		if (userBal < Number(loanParams['amountOffered'])) {
			stopWaiting()
			alertThis({
				message: 'Your collateral balance is insufficient for the loan',
				forConfirmation: false,
			})
			return
		}

		const optKeys = Object.keys(loanParams)
		const len = optKeys.length
		const creationOpts = { borrower: user.address }
		let i = 0
		for (i; i < len; i++) {
			const key = optKeys[i]
			if (loanParams[key]) creationOpts[key] = loanParams[key]
		}
		try {
			const ctc = user.account.contract(loanCtc)
			const tokReq = Number(loanParams['tokenRequested'])
			const tokOff = Number(loanParams['tokenOffered'])

			await reach.withDisconnect(async () => {
				await ctc.p.B({
					getParams: async () => ({
						tokLoan: Number(loanParams['tokenRequested']),
						principal: await fmtCurrency(
							tokReq,
							Number(loanParams['amountRequested'])
						),
						amount: await fmtCurrency(
							tokReq,
							Number(loanParams['paymentAmount'])
						),
						maturation: Number(loanParams['maturation']),
						tokCollateral: Number(loanParams['tokenOffered']),
						collateral: await fmtCurrency(
							tokOff,
							Number(loanParams['amountOffered'])
						),
						address: String(user.address),
					}),
					created: async (created) => {
						let rewardSent = false
						const res = await request({
							path: `loans`,
							method: 'POST',
							body: {
								...loanParams,
								contractInfo: JSON.stringify(await ctc.getInfo()),
								tokenRequested: tokReq,
								tokenOffered: tokOff,
								amountRequested: Number(loanParams['amountRequested']),
								amountOffered: Number(loanParams['amountOffered']),
								paymentAmount: Number(loanParams['paymentAmount']),
								maturation: Number(loanParams['maturation']),
								borrower: String(user.address),
								lender: '',
								created: reach.bigNumberToNumber(created),
								resolved: false,
							},
						})
						// try {
						// 	rewardSent = await adminConnection.apis.A.sendLoyaltyToken(
						// 		reach.formatAddress(user.address)
						// 	)
						// } catch (error) {
						// 	console.log({ error })
						// }
						stopWaiting()
						if (res.success) {
							alertThis({
								message: `Success!${
									rewardSent ? ` You've also received some loyalty tokens` : ''
								}`,
								forConfirmation: false,
							})
							success = true
						} else {
							alertThis({
								message: `Failed to upload Advert information. Error message: ${res.error.message}`,
								forConfirmation: false,
							})
						}
						reach.disconnect(null)
					},
				})
			})
		} catch (error) {
			console.log({ error })
			stopWaiting()
			alertThis({
				message: 'Creation failed',
				forConfirmation: false,
			})
		}
		return success
	}

	const ReachContextValue = {
		// ...states
		user,
		connectToWallet,
		promiseOfConfirmation,
		setPromiseOfConfirmation,
		alertInfo,
		setAlertInfo,
		showAlert,
		setShowAlert,
		showPreloader,
		setShowPreloader,
		setProcessing,
		startWaiting,
		stopWaiting,
		sleep,
		processing,
		setShowConnectAccount,
		alertThis,
		lend,
		repay,
		checkForSignIn,
		create,
		adverts,
		setAdverts,
		userAdverts,
		setUserAdverts,
		borrowedLoans,
		setBorrowedLoans,
		loanedLoans,
		setLoanedLoans,
	}

	return (
		<ReachContext.Provider value={ReachContextValue}>
			{children}
			<Alert />
			{showConnectAccount && <ConnectAccount />}
			{processing && <LoadingPreview />}
		</ReachContext.Provider>
	)
}

export default ReachContextProvider
