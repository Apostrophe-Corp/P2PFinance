import React, { useState } from 'react'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_MakePeraConnect as MakePeraConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
import { PeraWalletConnect } from '@perawallet/connect'
import { loanCtc, adminCtc } from '../contracts'
import { request } from '../utils/cf'
import { Alert } from '../components/Alert'
import { ConnectAccount } from '../components/ConnectAccount'
import { LoadingPreview } from '../components/LoadingPreview'

const reach = loadStdlib({
	...process.env,
	REACH_NO_WARN: 'Y',
	REACH_CONNECTOR_MODE: 'ETH',
})
const providerEnv = 'TestNet'

const waitingPro = {}

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})
	const [adminConnection, setAdminConnection] = useState(null)

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

	const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m))

	const alertThis = async ({
		message = 'Confirm Action',
		accept = 'Yes',
		decline = 'No',
		forConfirmation = true,
		prompt = false,
		persist = false,
		neutral = false,
	} = {}) => {
		await sleep(300)
		promiseOfConfirmation?.resolve && promiseOfConfirmation.resolve()
		const result = await new Promise((resolve) => {
			setPromiseOfConfirmation({ resolve })
			setAlertInfo((previous) => ({
				message,
				accept,
				decline,
				forConfirmation,
				prompt,
				persist,
				neutral,
			}))
			setShowAlert((lastState) => true)
		})
		return result
	}

	const startWaiting = async () => {
		const shouldDisplay = (display) => {
			setShowPreloader(display)
			if (display) setProcessing(display)
		}
		try {
			await new Promise((resolve, reject) => {
				waitingPro['resolve'] = resolve
				waitingPro['reject'] = reject
				shouldDisplay(true)
			})
			shouldDisplay(false)
		} catch (error) {
			shouldDisplay(false)
		}
	}

	const stopWaiting = (mode = true) => {
		if (mode && waitingPro.resolve) waitingPro.resolve()
		else if (waitingPro.reject) waitingPro.reject()
	}

	const connectToWalletETH = async () => {
		try {
			const account = await reach.getDefaultAccount()
			const adminConn = account.contract(
				adminCtc,
				JSON.parse(process.env.REACT_APP_ADMIN_CONTRACT_INFO)
			)
			setUser({
				account,
				balance: async (tokenID = null) => {
					const balAtomic = tokenID
						? await reach.balanceOf(account, tokenID)
						: await reach.balanceOf(account)
					const balance = reach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: reach.formatAddress(account.getAddress()),
			})
			setAdminConnection(adminConn)
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
		let rewardSent = false
		const userAssetBalance = await reach.balanceOf(user.account, asset)
		const enough = userAssetBalance >= loanAmount

		if (!enough) {
			alertThis({
				message: `Your balance of asset - ${asset}: ${userAssetBalance}, is insufficient for the loan amount of: ${loanAmount}`,
				forConfirmation: false,
			})
			return
		}
		const agreed = await alertThis({
			message: `You're about to lend ${loanAmount} of asset: ${asset}. Proceed?`,
			accept: 'Yes',
			decline: 'No',
		})

		if (!agreed) return

		startWaiting()
		try {
			const ctc = user.account.contract(loanCtc, JSON.parse(loanCtcInfo))
			await ctc.a.Lender.lend()

			const res = await request({
				path: `/loans/${id}`,
				method: 'PATCH',
				body: {
					lender: String(user.address),
				},
			})

			try {
				rewardSent = await adminConnection.apis.A.sendLoyaltyToken(user.address)
			} catch (error) {
				console.log({ error })
			}
			stopWaiting()
			if (res.success) {
				alertThis({
					message: `Success!${
						rewardSent ? ` You've also received some loyalty tokens` : ''
					}`,
					forConfirmation: false,
				})
			} else {
				alertThis({
					message: `Failed to upload your address information. Note: This does not affect the contract. Error message: ${res.message}`,
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

	const repay = async (loanCtcInfo, asset) => {
		const payAmount = await alertThis({
			message: 'Enter the repay amount',
			prompt: true,
		})

		const userAssetBalance = await reach.balanceOf(user.account, asset)
		const enough = userAssetBalance >= payAmount

		if (!enough) {
			alertThis({
				message: `Your balance of asset - ${asset}: ${userAssetBalance}, is insufficient for a repayment of: ${payAmount}`,
				forConfirmation: false,
			})
			return
		}
		const agreed = await alertThis({
			message: `You're about to repay ${payAmount} of asset: ${asset}. Proceed?`,
			accept: 'Yes',
			decline: 'No',
		})

		if (!agreed) return

		startWaiting()
		try {
			const ctc = user.account.contract(loanCtc, JSON.parse(loanCtcInfo))
			await ctc.a.Borrower.repay()
			stopWaiting()
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} catch (error) {
			console.log({ error })
			stopWaiting()
			alertThis({
				message: 'Unable to process your request',
				forConfirmation: false,
			})
		}
	}

	const checkForSignin = async (func) => {
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
			ctc.p.B({
				getParams: {
					collateral: Number(loanParams['amountOffered']),
					principal: Number(loanParams['amountRequested']),
					amount: Number(loanParams['paymentAmount']),
					maturation: Number(loanParams['maturation']),
					tokCollateral: Number(loanParams['tokenOffered']),
					tokLoan: Number(loanParams['tokeRequested']),
					address: user.address,
				},
				created: async (created) => {
					let rewardSent = false
					const res = await request({
						path: `/loans`,
						method: 'POST',
						body: {
							...loanParams,
							contractInfo: JSON.stringify(await ctc.getInfo()),
							created,
						},
					})
					try {
						rewardSent = await adminConnection.apis.A.sendLoyaltyToken(
							user.address
						)
					} catch (error) {
						console.log({ error })
					}
					stopWaiting()
					if (res.success) {
						alertThis({
							message: `Success!${
								rewardSent ? ` You've also received some loyalty tokens` : ''
							}`,
							forConfirmation: false,
						})
					} else {
						alertThis({
							message: `Failed to upload Advert information. Error message: ${res.message}`,
							forConfirmation: false,
						})
					}
				},
			})
		} catch (error) {
			console.log({ error })
			stopWaiting()
			alertThis({
				message: 'Creation failed',
				forConfirmation: false,
			})
		}
	}

	const ReachContextValue = {
		// ...states
		user,
		connectToWallet:
			process.env.REACT_APP_REACH_CONNECTOR_MODE === 'ETH'
				? connectToWalletETH
				: connectToWallet,
		promiseOfConfirmation,
		setPromiseOfConfirmation,
		alertInfo,
		setAlertInfo,
		showAlert,
		setShowAlert,
		showPreloader,
		setShowPreloader,
		setProcessing,
		sleep,
		processing,
		setShowConnectAccount,
		alertThis,
		lend,
		repay,
		checkForSignin,
		create,
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
