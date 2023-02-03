import React, { useEffect } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom'
import { useAuth, useReach } from './hooks'
import AppView from './views/App'
import ReachContextProvider from './context/ReachContext'
import AuthContextProvider from './context/AuthContext'
import { Landing, Loans, Profile } from './layouts'
import { SignUp } from './components/SignUp'
import { Create } from './components/Create'
import { cf } from './utils'
import s from './styles/Shared.module.css'
import app from './styles/Landing.module.css'

const PrivateRoute = ({ children }) => {
	const { isAuthenticated } = useAuth()
	const { user } = useReach()
	const navigate = useNavigate()

	useEffect(
		() => {
			if (!user.address) navigate('/')
			if (!isAuthenticated) {
				navigate('/')
			}
		},
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
		[user]
	)

	return (
		<div className={cf(s.wMax, s.window, s.flex, s.flexCenter)}>
			{isAuthenticated ? (
				<>{children}</>
			) : (
				<div className={cf(s.window, s.wMax, s.flex, s.flexCenter, s.hidden)}>
					<div className={cf(s.flex, s.flexCenter, app.btnBox)}>
						<button
							className={cf(app.connectAccount)}
							onClick={() => {
								navigate('/')
							}}
						>
							Back to Home
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

const DepRoute = ({ children }) => {
	const { user } = useReach()
	const navigate = useNavigate()

	useEffect(
		() => {
			if (!user.address) {
				navigate('/')
			}
		},
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
		[user]
	)

	return (
		<div className={cf(s.wMax, s.window, s.flex, s.flexCenter)}>
			{user.address ? (
				<>{children}</>
			) : (
				<div className={cf(s.window, s.wMax, s.flex, s.flexCenter, s.hidden)}>
					<div className={cf(s.flex, s.flexCenter, app.btnBox)}>
						<button
							className={cf(app.connectAccount)}
							onClick={() => {
								navigate('/')
							}}
						>
							Back to Home
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

const App = () => {
	return (
		<ReachContextProvider>
			<AuthContextProvider>
				<Router>
					<Routes>
						<Route
							path='/'
							element={
								<AppView>
									<Landing />
								</AppView>
							}
						/>
						<Route
							path='/loans'
							element={
								<AppView>
									<PrivateRoute children={<Loans />} />
								</AppView>
							}
						/>
						<Route
							path='/account'
							element={
								<AppView>
									<PrivateRoute children={<Profile />} />
								</AppView>
							}
						/>
						<Route
							path='/new-loan'
							element={
								<AppView>
									<PrivateRoute children={<Create />} />
								</AppView>
							}
						/>
						<Route
							path='/sign-up'
							element={
								<AppView>
									<DepRoute>
										<SignUp />
									</DepRoute>
								</AppView>
							}
						/>
					</Routes>
				</Router>
			</AuthContextProvider>
		</ReachContextProvider>
	)
}

export default App
