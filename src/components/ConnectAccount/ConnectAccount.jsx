import React from 'react'
import s from '../../styles/Shared.module.css'
import ca from '../../styles/ConnectAccount.module.css'
import { useReach } from '../../hooks'
import { cf } from '../../utils'

const ConnectAccount = () => {
	const { setShowConnectAccount, connectToWallet, user, alertThis } = useReach()

	const copyToClipboard = async (e) => {
		navigator.clipboard.writeText(user.address)
		alertThis({
			message: 'Copied to clipboard',
			forConfirmation: false,
		})
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, ca.conParent)}>
			<div className={cf(s.wMax, ca.conMask)}></div>
			<div className={cf(s.flex, s.flexCenter, ca.conContainer)}>
				<button
					onClick={() => {
						setShowConnectAccount(false)
					}}
					type='button'
					className={cf(s.flex, s.flexCenter, s.dInlineBlock, ca.closeBtn)}
				>
					Close
				</button>
				<div
					className={cf(
						s.wMax,
						s.flex,
						s.flexCenter,
						s.p10,
						s.m10,
						ca.addressContainer
					)}
				>
					{user.account && (
						<button
							onClick={copyToClipboard}
							className={cf(s.wMax, s.dInlineBlock, ca.connectTitle)}
						>
							{user.address}
						</button>
					)}
				</div>
				<div className={cf(s.w50, s.w480_100, s.w360_100, ca.wallet)}></div>
				<div
					className={cf(
						s.w50,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flex_dColumn,
						s.flexCenter,
						ca.connect
					)}
				>
					<div
						className={cf(s.flex, s.flexCenter, ca.connectOption)}
						onClick={() => {
							connectToWallet('PeraConnect')
						}}
					>
						<div className={cf(ca.walletIcon, ca.pera)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								Pera Algo Wallet
							</span>
						</div>
					</div>
					<div
						className={cf(s.flex, s.flexCenter, ca.connectOption)}
						onClick={() => {
							connectToWallet('MyAlgoConnect')
						}}
					>
						<div className={cf(ca.walletIcon, ca.myAlgo)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								MyAlgo Wallet
							</span>
						</div>
					</div>
					<div
						className={cf(s.flex, s.flexCenter, ca.connectOption)}
						onClick={() => {
							connectToWallet('WalletConnect')
						}}
					>
						<div className={cf(ca.walletIcon, ca.other)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								WalletConnect
							</span>
						</div>
					</div>
					<div
						className={cf(s.flex, s.flexCenter, ca.connectOption)}
						onClick={() => {
							connectToWallet('Mnemonic')
						}}
					>
						<div className={cf(ca.walletIcon)}></div>
						<div className={cf(s.wMax, ca.walletName)}>
							<span className={cf(s.wMax, s.dInlineBlock, ca.walletNameText)}>
								Connect with Mnemonic
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConnectAccount
