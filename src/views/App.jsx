import React from 'react'
import g from '../styles/Global.module.css'
import s from '../styles/Shared.module.css'
import app from '../styles/Landing.module.css'
import { useNavigate } from 'react-router-dom'
import { useReach, useAuth } from '../hooks'
import { cf } from '../utils'

const App = ({ children }) => {
	const navigate = useNavigate()
	const { checkForSignIn, setShowConnectAccount, user, alertThis } = useReach()
	const { isAuthenticated, authUser, signIn } = useAuth()
	return (
		<div>
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.spaceXBetween,
					s.spaceYCenter,
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
					Urgent2K
				</div>
				{user.address && isAuthenticated && (
					<div
						className={cf(s.p0, s.m0, s.w480_100, s.w360_100, app.navParent)}
					>
						<ul className={cf(s.p0, s.m0, s.flex, s.flexCenter)}>
							<li
								className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
								onClick={() => {
									checkForSignIn(() => {
										navigate('/new-loan')
									})
								}}
							>
								Make Ad
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
					{user.address && (
						<button
							className={cf(s.w480_100, s.w360_100, app.connectAccount)}
							onClick={() => {
								checkForSignIn(async () => {
									!(isAuthenticated || (await signIn(user.address)))
										? navigate('/sign-up')
										: navigate('/account')
								})
							}}
						>
							{isAuthenticated ? authUser.username : `Sign In`}
						</button>
					)}
					<button
						className={cf(s.w480_100, s.w360_100, app.connectAccount)}
						onClick={() => {
							!user.address
								? setShowConnectAccount(true)
								: alertThis({
										message: 'You are connected',
										forConfirmation: false,
								  })
						}}
					>
						{!user.account ? 'Connect Wallet' : user.address}
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
						Urgent2K
					</div>
					<div className={cf(s.wMax, app.registered)}>
						Urgent2K is the product of Apostrophe Corp. for the Polygon Bounty
						Hack.
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
