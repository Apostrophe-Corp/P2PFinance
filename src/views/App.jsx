import React from 'react'
import g from '../styles/Global.module.css'
import s from '../styles/Shared.module.css'
import app from '../styles/Landing.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useReach, useAuth } from '../hooks'
import { cf } from '../utils'

const App = ({ children }) => {
	const navigate = useNavigate()
	const location = useLocation()
	const {
		checkForSignIn,
		setShowConnectAccount,
		user,
		alertThis,
		disconnectWallet,
	} = useReach()
	const { isAuthenticated, authUser, signIn, signOut } = useAuth()
	return (
		<div>
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.spaceXBetween,
					s.spaceYCenter,
					s.g10,
					app.header,
					g.empty
				)}
			>
				<div
					className={cf(app.branding, s.w480_100, s.w360_100)}
					onClick={() => {
						navigate('/')
					}}
				>
					P2PFinance
				</div>
				{user.address && isAuthenticated && (
					<div
						className={cf(s.p0, s.m0, s.w480_100, s.w360_100, app.navParent)}
					>
						<ul className={cf(s.p0, s.m0, s.flex, s.flexCenter, s.g10)}>
							<li
								className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
								onClick={() => {
									checkForSignIn(() => {
										navigate('/new-loan')
									})
								}}
							>
								Borrow
							</li>
							<li
								className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
								onClick={() => {
									checkForSignIn(() => {
										navigate('/loans')
									})
								}}
							>
								Lend
							</li>
						</ul>
					</div>
				)}
				<div className={cf(s.flex, s.flexCenter, app.btnBox)}>
					<button
						className={cf(app.connectAccount)}
						onClick={() => {
							!user.address
								? setShowConnectAccount(true)
								: !isAuthenticated
								? (async () => {
										const proceed = await alertThis({
											message: `Your wallet is connected. Would you like to sign-in or disconnect your wallet?`,
											accept: 'Sign In',
											decline: 'Disconnect',
											neutral: true,
											canClear: true,
										})
										if (proceed === undefined) return
										!proceed
											? (async () => {
													navigate('/')
													await disconnectWallet()
											  })()
											: checkForSignIn(async () => {
													!(
														isAuthenticated ||
														(await signIn(user.address, () => {
															navigate('/account')
														}))
													)
														? navigate('/sign-up')
														: navigate('/account')
											  })
								  })()
								: (async () => {
										const viewingProfile = location.pathname === '/account'
										const proceed = await alertThis({
											message: `You are signed-in. Would you like to ${
												viewingProfile ? 'sign-out' : 'view your profile'
											} or disconnect your wallet?`,
											accept: viewingProfile ? 'Sign Out' : 'View Profile',
											decline: 'Disconnect',
											neutral: true,
											canClear: true,
										})
										if (proceed === undefined) return
										proceed
											? viewingProfile
												? (async () => {
														navigate('/')
														await signOut()
												  })()
												: navigate('/account')
											: (async () => {
													navigate('/')
													await signOut()
													await disconnectWallet()
											  })()
								  })()
						}}
					>
						{!user.account
							? 'Connect Wallet'
							: isAuthenticated
							? authUser.username
							: user.address}
					</button>
				</div>
			</div>
			{children}
			<div className={cf(s.container, s.flex, s.wMax, app.footer)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter, app.footerBar)}>
					<div
						className={cf(app.footerBranding)}
						onClick={() => {
							navigate('/')
						}}
					>
						P2PFinance
					</div>
					<div className={cf(s.wMax, app.registered)}>
						Copyright &copy; Apostrophe Corp. 2022.
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
