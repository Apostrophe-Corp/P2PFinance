import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useReach } from '../hooks'
import { request } from '../utils'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const { alertThis } = useReach()
	const [isAuthenticated, setIsAuthenticated] = useState({})
	const [authUser, setAuthUser] = useState({})
	const history = useHistory()

	const signIn = async (address, cb) => {
		const res = await request({
			path: `/users/${address}`,
			method: 'GET',
		})

		if (res.success) {
			setIsAuthenticated(true)
			setAuthUser(res.user)
			cb()
			history.push('/account')
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `Sign-in failed. Error message: ${res.message}`,
				forConfirmation: false,
			})
			setAuthUser({})
		}

		return res.success
	}

	const signUp = async ({ username, address, pfp, pfpContract }, cb) => {
		const res = await request({
			path: `/users`,
			method: 'POST',
			body: {
				username,
				address,
				pfp,
				pfpContract,
			},
		})

		if (res.success) {
			setIsAuthenticated(true)
			setAuthUser({ username, address, pfp, pfpContract })
			cb()
			history.push('/account')
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `Sign-up failed. Error message: ${res.message}`,
				forConfirmation: false,
			})
		}

		return res.success
	}

	const signOut = async (cb) => {
		if (isAuthenticated) {
			history.push('/')
			setIsAuthenticated(false)
			setAuthUser({})
			cb()
		}
	}

	const auth = {
		isAuthenticated,
		authUser,
		signIn,
		signUp,
		signOut,
	}

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
