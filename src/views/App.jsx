import React from 'react'
import s from '../styles/Shared.module.css'
import app from '../styles/Landing.module.css'
import { useHistory } from 'react-router-dom'
import { useReach, useAuth } from '../hooks'
import { cf } from '../utils'

// TODO complete this component
const App = ({ children }) => {
	const history = useHistory()
	const { checkForSignin, setShowConnectAccount, user } = useReach()
	const { isAuthenticated, authUser } = useAuth()
	return (
		<div>
			<div
				className={cf(
					s.container,
					s.wMax,
					s.flex,
					s.spaceXBetween,
					s.spaceYCenter,
					app.header
				)}
			>
				<div
					className={cf(app.branding, s.w480_100, s.w360_100)}
					onClick={() => {
						history.push('/')
					}}
				>
					Urgent2K
				</div>
				<div className={cf(s.p0, s.m0, s.w480_100, s.w360_100, app.navParent)}>
					<ul className={cf(s.p0, s.m0, s.flex, s.flexCenter)}>
						<li
							className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
							onClick={() => {
								checkForSignin(() => {
									history.push('/new-loan')
								})
							}}
						>
							Create
						</li>
						<li
							className={cf(s.flex, s.flexCenter, s.p10, s.m0, app.navItem)}
							onClick={() => {
								checkForSignin(() => {
									history.push('/loans')
								})
							}}
						>
							Lend
						</li>
					</ul>
				</div>
				<button
					className={cf(s.w480_100, s.w360_100, app.connectAccount)}
					onClick={() => {
						!isAuthenticated
							? history.push('/sign-up')
							: history.push('/account')
					}}
				>
					{isAuthenticated ? authUser.username : `Sign Up`}
				</button>
				<button
					className={cf(s.w480_100, s.w360_100, app.connectAccount)}
					onClick={() => {
						setShowConnectAccount(true)
					}}
				>
					{!user.account ? 'Connect Wallet' : user.address}
				</button>
			</div>
			{children}
			<div className={cf(s.container, s.flex, s.wMax, app.footer)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter, app.footerBar)}>
					<div
						className={cf(app.footerBranding)}
						onClick={() => {
							history.push('/')
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
