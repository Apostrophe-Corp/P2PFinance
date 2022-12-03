import React, { useState, useEffect, useRef } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { useNavigate } from 'react-router-dom'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach, useAuth } from '../../hooks'
import { cf, request, setPfps } from '../../utils'

const reach = loadStdlib({
	...process.env,
	REACH_NO_WARN: 'Y',
	REACH_CONNECTOR_MODE: 'ETH',
})

const SignUp = () => {
	const pfpRef = useRef()
	const { alertThis, user } = useReach()
	const { signUp, signIn } = useAuth()
	const [[username, setUsername], [pfp, setPfp], [contract, setContract]] = [
		useState(''),
		useState(''),
		useState(''),
	]
	const navigate = useNavigate()

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value
		if (name === 'pfp') setPfp(value)
		else if (name === 'username') setUsername(value)
		else if (name === 'contract') setContract(value)
	}

	const save = async (e) => {
		e.preventDefault()
		const owned = await reach.balanceOf(user.account, contract)
		const owned_ = await reach.balanceOf(user.account, pfp)
		if (!(owned || owned_)) {
			alertThis({
				message: "You don't seem to own this NFT",
				forConfirmation: false,
			})
			return
		}
		const registered = await request({
			path: `/users/${user.address}`,
			method: 'GET',
		})
		if (!(registered.success && registered.id))
			await signUp(username, user.address, pfp, contract, () => {
				navigate('/account')
			})
		else {
			const signin = await alertThis({
				message: `You're already registered. Please Sign in`,
				accept: 'Continue',
				decline: 'Not now',
			})
			if (signin)
				await signIn(user.address, () => {
					navigate('/account')
				})
		}
	}

	useEffect(() => {
		let timer = undefined
		if (pfp && contract && timer === undefined) {
			timer = setTimeout(() => {
				setPfps([pfpRef, pfp, contract, false])
				clearTimeout(timer)
				timer = undefined
			}, 3000)
		}
		return () => {
			clearTimeout(timer)
			timer = undefined
		}
	}, [pfp, contract])

	return (
		<div className={cf(s.wMax, s.window)}>
			<div className={cf(s.wMax, s.flex, s.fleCenter, s.m0, cr8.createParent)}>
				<div
					className={cf(
						s.flex,
						s.flexCenter,
						s.flex_dColumn,
						s.w50,
						s.w900_100,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						cr8.callOut
					)}
				>
					<h1 className={cf(s.w480_100, s.w360_100, cr8.callOutMain)}>
						Some dummy text...Some dummy text...Some dummy text...Some dummy
						text...
					</h1>
					<h2 className={cf(cr8.callOutSub)}>
						Some dummy text...Some dummy text...Some dummy text...
					</h2>
				</div>
				<div
					className={cf(
						s.w50,
						s.w900_100,
						s.w760_100,
						s.w480_100,
						s.w360_100,
						s.flex,
						s.flexCenter,
						cr8.formContainer
					)}
				>
					<form
						className={cf(s.flex, s.flexCenter, s.flex_dColumn, cr8.createForm)}
						onSubmit={save}
					>
						<div
							className={cf(cr8.preview)}
							ref={pfpRef}
						></div>
						<span className={cf(cr8.sideNote)}>
							Preview only available for image NFTs
						</span>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='username'
						>
							<span className={cf(cr8.formText)}>Username</span>
							<input
								type='text'
								name='username'
								id='username'
								onInput={handleInputChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='pfp'
						>
							<span className={cf(cr8.formText)}>NFT ID</span>
							<input
								type='text'
								name='pfp'
								id='pfp'
								onInput={handleInputChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='contract'
						>
							<span className={cf(cr8.formText)}>NFT Contract Address</span>
							<input
								type='text'
								name='contract'
								id='contract'
								onInput={handleInputChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<div className={cf(s.wMax, s.flex, s.flexCenter, cr8.submitDiv)}>
							<button
								type='submit'
								disabled={!username}
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
