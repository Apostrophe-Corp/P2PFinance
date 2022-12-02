import React, { Children, useState } from 'react'
import Helmet from 'react-helmet'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_MakePeraConnect as MakePeraConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
import { PeraWalletConnect } from '@perawallet/connect'
import { loanCtc, adminCtc } from '../../contracts'
import { cf } from '../utils/cf'
import { Alert } from '../components/Alert'
import { ConnectAccount } from '../components/ConnectAccount'

const reach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })
const providerEnv = 'TestNet'

const waitingPro = {}

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	// states
	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})

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
					const balAtomic = await reach.balanceOf(account, tokenID)
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

	const lend = async (loanCtcInfo, loanAmount, asset) => {
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
		sleep,
		setShowConnectAccount,
		alertThis,
		lend,
		repay,
	}

	return (
		<ReachContext.Provider value={ReachContextValue}>
			<Helmet>
				<title>Urgent2K | D-Lending Platform</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Helmet>
			{children}
			<Alert />
			{showConnectAccount && <ConnectAccount />}
		</ReachContext.Provider>
	)
}

export default ReachContextProvider
