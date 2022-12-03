import React, { useEffect } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom'
import { useAuth, useReach } from './hooks'
import AppView from './views/App'
import ReachContextProvider from './context/ReachContext'
import AuthContextProvider from './context/AuthContext'
import { Landing, Loans, Profile } from './layouts'
import { SignUp } from './components/SignUp'
import { Create } from './components/Create'

const PrivateRoute = ({ child }) => {
	const { isAuthenticated, signIn } = useAuth()
	const { alertThis, user } = useReach()
	const navigate = useNavigate()

	useEffect(() => {
		const verifyAuth = async () => {
			if (!isAuthenticated) {
				const accept = await alertThis({
					message: 'You are not signed in. Would you like to do so?',
					accept: 'Sign in',
					decline: 'Not now',
				})
				if (accept) {
					const stay = await signIn(user.address)
					if (!stay) navigate(-1)
				} else {
					navigate(-1)
				}
			}
		}
		verifyAuth()
	}, [])
	return <>{isAuthenticated ? { child } : <></>}</>
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
