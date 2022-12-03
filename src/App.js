import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { useAuth } from './hooks'
import AppView from './views/App'
import ReachContextProvider from './context/ReachContext'
import AuthContextProvider from './context/AuthContext'
import { Landing, Loans, Profile } from './layouts'
import { SignUp } from './components/SignUp'
import { Create } from './components/Create'

const PrivateRoute = ({ child }) => {
	const { isAuthenticated } = useAuth()
	return (
		<>
			{isAuthenticated ? (
				{ child }
			) : (
				<Navigate
					to='/sign-in'
					replace={true}
				/>
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
