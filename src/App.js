import React, { useLayoutEffect } from 'react'
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

const PrivateRoute = ({ child }) => {
	const { isAuthenticated, signIn } = useAuth()
	const { alertThis, user } = useReach()
	const navigate = useNavigate()

	useLayoutEffect(() => {
		const verifyAuth = async () => {
			if (!user.account) {
				navigate('/')
			} else {
				if (!isAuthenticated) {
					const accept = await alertThis({
						message: 'You are not signed in. Would you like to do so?',
						accept: 'Sign in',
						decline: 'Not now',
					})
					if (accept) {
						const stay = await signIn(user.address)
						if (!stay) navigate('/')
					} else {
						navigate('/')
					}
				}
			}
		}
		verifyAuth()
	}, [alertThis, isAuthenticated, navigate, signIn, user.account, user.address])
	return (
		<>
			{isAuthenticated ? (
				{ child }
			) : (
				<div
					className={cf(s.window, s.wMax, s.flex, s.flexCenter, s.hidden)}
				></div>
			)}
		</>
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
								<PrivateRoute
									child={
										<AppView>
											<Loans />
										</AppView>
									}
								/>
							}
						/>
						<Route
							path='/account'
							element={
								<PrivateRoute
									child={
										<AppView>
											<Profile />
										</AppView>
									}
								/>
							}
						/>
						<Route
							path='/new-loan'
							element={
								<PrivateRoute
									child={
										<AppView>
											<Create />
										</AppView>
									}
								/>
							}
						/>
						<Route
							path='/sign-up'
							element={
								<AppView>
									<SignUp />
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
