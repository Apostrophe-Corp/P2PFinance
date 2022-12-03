import React, { createContext, useState } from 'react'
import { useReach } from '../hooks'
import { request } from '../utils'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const { alertThis, startWaiting, stopWaiting } = useReach()
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [authUser, setAuthUser] = useState({})

	const signIn = async (address, cb=null) => {
		startWaiting()
		const res = await request({
			path: `/users/${address}`,
			method: 'GET',
		})

		stopWaiting()
		if (res.success) {			
			setIsAuthenticated(true)
			setAuthUser(res.user)
			cb != null && cb()			
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `Sign-in failed. Error message: ${res.error.message}`,
				forConfirmation: false,
			})
			setAuthUser({})
		}

		return res.success
	}

	const signUp = async ({ username, address, pfp, pfpContract }, cb=null) => {
		startWaiting()
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

		stopWaiting()
		if (res.success) {
			setIsAuthenticated(true)
			setAuthUser({ username, address, pfp, pfpContract })
			cb != null && cb()
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `Sign-up failed. Error message: ${res.error.message}`,
				forConfirmation: false,
			})
		}

		return res.success
	}

	const signOut = async (cb=null) => {
		if (isAuthenticated) {
			cb != null && cb()
			setIsAuthenticated(false)
			setAuthUser({})
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
