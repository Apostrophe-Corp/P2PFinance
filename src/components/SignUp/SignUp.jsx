import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach, useAuth } from '../../hooks'
import { cf, request, setPFPs } from '../../utils'

const SignUp = () => {
	const pfpRef = useRef()
	const { alertThis, user } = useReach()
	const { signUp, signIn } = useAuth()
	const [[username, setUsername], [pfp, setPfp]] = [useState(''), useState(0)]
	const navigate = useNavigate()

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value
		if (name === 'pfp') setPfp(Number(value))
		else if (name === 'username') setUsername(value)
	}

	const save = async (e) => {
		e.preventDefault()
		const registered = await request({
			path: `users/${user.address}`,
			method: 'GET',
		})
		if (!(registered.success && registered.id))
			await signUp(username, user.address, pfp, () => {
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
		if (pfp) {
			if (typeof timer == 'number') {
				clearTimeout(timer)
				timer = undefined
			}
			timer = setTimeout(() => {
				setPFPs([[pfpRef, pfp, false]])
				clearTimeout(timer)
				timer = undefined
			}, 3000)
		}
		return () => {
			clearTimeout(timer)
			timer = undefined
		}
	}, [pfp])

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
						Sign Up
					</h1>
					<h2 className={cf(cr8.callOutSub)}>
						Make the first step to gain access to the world's funds.
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
								onChange={handleInputChange}
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
								type='number'
								name='pfp'
								id='pfp'
								onChange={handleInputChange}
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
