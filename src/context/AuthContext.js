import React, { createContext, useState } from 'react'
import { useReach } from '../hooks'
import { request } from '../utils'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const { alertThis, startWaiting, stopWaiting } = useReach()
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [authUser, setAuthUser] = useState({})

	const signIn = async (address, cb = null) => {
		startWaiting()
		let res = undefined,
			retries = 0
		do {
			res = await request({
				path: `users/${address}`,
				method: 'GET',
			})
		} while (
			(res?.message === 'internal server error' || res?.error === 500) &&
			retries < 3
		)

		stopWaiting()
		if (res.success) {
			setIsAuthenticated(true)
			setAuthUser(res.user)
			cb != null && cb()
			// alertThis({
			// 	message: 'Success',
			// 	forConfirmation: false,
			// })
		} else {
			if (res?.message === 'resource not found' || res?.error === 404) {
				alertThis({
					message: `No account was found for your wallet address, please sign up`,
					forConfirmation: false,
				})
				setAuthUser({})
			} else {
				alertThis({
					message: `Sign-in failed. Error message: ${
						res.message ?? 'resource not found'
					}`,
					forConfirmation: false,
				})
				setAuthUser({})
			}
		}

		return res.success
	}

	const signUp = async (username, address, pfp, cb = null) => {
		startWaiting()
		let res = undefined,
			retries = 0
		do {
			res = await request({
				path: `users`,
				method: 'POST',
				body: {
					username,
					address,
					pfp,
				},
			})
		} while (
			(res?.message === 'internal server error' || res?.error === 500) &&
			retries < 3
		)

		stopWaiting()
		if (res.success) {
			setIsAuthenticated(true)
			setAuthUser({ username, address, pfp })
			if (cb !== null) cb()
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			if (res?.message === 'bad request' || res?.error === 400)
				alertThis({
					message: `Sign-up failed. Error message: username already exists`,
					forConfirmation: false,
				})
			else
				alertThis({
					message: `Sign-up failed. Error message: ${
						res?.error?.message ?? res.message
					}`,
					forConfirmation: false,
				})
		}

		return res.success
	}

	const signOut = async (cb = null) => {
		if (isAuthenticated) {
			cb != null && cb()
			setIsAuthenticated(false)
			setAuthUser({})
		}
		return true
	}

	const updateUser = async (address) => {
		let res = undefined,
			retries = 0
		do {
			res = await request({
				path: `users/${address}`,
				method: 'GET',
			})
		} while (
			(res?.message === 'internal server error' || res?.error === 500) &&
			retries < 3
		)

		if (res.success) {
			setAuthUser(res.user)
			alertThis({
				message: 'Success',
				forConfirmation: false,
			})
		} else {
			alertThis({
				message: `Failed to update profile. Error message: ${res.error.message}`,
				forConfirmation: false,
			})
		}
	}

	const auth = {
		isAuthenticated,
		authUser,
		signIn,
		signUp,
		signOut,
		updateUser,
	}

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
