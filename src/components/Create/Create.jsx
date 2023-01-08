import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach } from '../../hooks'
import { setPFPs, cf } from '../../utils'
import previewImg from '../../assets/images/logo.jpg' // TODO change this image

const Create = () => {
	const navigate = useNavigate()
	const { create } = useReach()
	const [loanParams, setLoanParams] = useState({})

	const previewRef = useRef()

	const setPreviewBgs = () => {
		previewRef.current.style.background = `url(${previewImg})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	const handleChange = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		value = Number(value)
		setLoanParams({
			...loanParams,
			[name]: value,
		})

		if (value && name === 'tokenOffered') {
			setPFPs([[previewRef, Number(value), false]])
		} else if (!value) {
			setPreviewBgs()
		}

		e.currentTarget.value = value
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		// console.log(nftParams)
		if (await create(loanParams)) navigate('/account')
	}

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
						Some dummy text...
					</h1>
					<h2 className={cf(cr8.callOutSub)}>Some dummy text...</h2>
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
						onSubmit={handleSubmit}
					>
						<div
							className={cf(cr8.preview)}
							ref={previewRef}
						></div>
						<span className={cf(cr8.sideNote)}>
							Preview only available for image NFTs
						</span>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='tokenRequested'
						>
							<span className={cf(cr8.formText)}>Loan Token ID</span>
							<input
								type='number'
								name='tokenRequested'
								id='tokenRequested'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='amountRequested'
						>
							<span className={cf(cr8.formText)}>Loan Amount</span>
							<input
								type='number'
								name='amountRequested'
								id='amountRequested'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='paymentAmount'
						>
							<span className={cf(cr8.formText)}>Repayment Amount</span>
							<input
								type='number'
								name='paymentAmount'
								id='paymentAmount'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='tokenOffered'
						>
							<span className={cf(cr8.formText)}>Collateral Token ID</span>
							<input
								type='number'
								name='tokenOffered'
								id='tokenOffered'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='amountOffered'
						>
							<span className={cf(cr8.formText)}>Collateral Token Amount</span>
							<input
								type='number'
								name='amountOffered'
								id='amountOffered'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='maturation'
						>
							<span className={cf(cr8.formText)}>Maturation in Blocks</span>
							<input
								type='number'
								name='maturation'
								id='maturation'
								onChange={handleChange}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<div className={cf(s.wMax, s.flex, s.flexCenter, cr8.submitDiv)}>
							<button
								type='submit'
								disabled={
									!(
										loanParams.tokenRequested &&
										loanParams.amountOffered &&
										loanParams.amountRequested &&
										loanParams.paymentAmount &&
										loanParams.tokenOffered &&
										loanParams.maturation
									)
								}
							>
								Create Advert
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Create
