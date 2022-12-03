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

const PrivateRoute = ({ child }) => {
	const { isAuthenticated, signIn } = useAuth()
	const { alertThis, user } = useReach()
	const navigate = useNavigate()

	useEffect(
		() => {
			if (!isAuthenticated) {
				alertThis({
					message: 'You are not signed in. Would you like to do so?',
					accept: 'Sign in',
					decline: 'Not now',
				}).then(async (accept) => {
					if (accept) {
						const stay = await signIn(user.address)
						if (!stay) navigate('/')
					} else {
						navigate('/')
					}
				})
			}
		},
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
		[]
	)

	return (
		<div className={cf(s.wMax, s.window, s.flex, s.flexCenter)}>
			{/* {isAuthenticated ? ( */}
				{ child }
			{/* ) : (
				<div className={cf(s.window, s.wMax, s.flex, s.flexCenter, s.hidden)}>
				</div>
			)} */}
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
									<PrivateRoute child={<Loans />} />
								</AppView>
							}
						/>
						<Route
							path='/account'
							element={
								<AppView>
									<PrivateRoute child={<Profile />} />
								</AppView>
							}
						/>
						<Route
							path='/new-loan'
							element={
								<AppView>
									<PrivateRoute child={<Create />} />
								</AppView>
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
