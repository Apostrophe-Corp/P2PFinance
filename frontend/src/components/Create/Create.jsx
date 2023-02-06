import React, { useState, useRef, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach } from '../../hooks'
import { setPFPs, cf } from '../../utils'
import previewImg from '../../assets/images/logo_.png'
import { ASASelect } from '../ASASelect'

const Create = () => {
	const navigate = useNavigate()
	const { create } = useReach()
	const [loanParams, setLoanParams] = useState({})
	const [selected, setSelected] = useState(true)
	const [offered, setOffered] = useState(true)
	const [unSelected, setUnSelected] = useState(false)
	const [unSelected_, setUnSelected_] = useState(false)

	const previewRef = useRef()
	const requestedRef = createRef()
	const offeredRef = createRef()

	const setPreviewBgs = () => {
		previewRef.current.style.background = `url(${previewImg})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	const handleChange = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		value = Number(value) < 0 ? 0 : Number(value)
		setLoanParams({
			...loanParams,
			[name]: value,
		})

		if (value && name === 'tokenOffered') {
			setPFPs([[previewRef, Number(value), false]])
			setOffered(false)
			setUnSelected_(true)
		} else if (!value) {
			setPreviewBgs()
		}

		if (name === 'tokenRequested') {
			setUnSelected(true)
			setSelected(false)
		}

		e.currentTarget.value = value
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		;(await create(
			{
				...loanParams,
				tokenRequested: requestedRef.current.value,
				tokenOffered: offeredRef.current.value,
			},
			selected,
			offered
		)) && navigate('/account')
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
						Launch Your Loan Advert Now!
					</h1>
					<h2 className={cf(cr8.callOutSub)}>
						Let lenders come to you, with the security of a smart contract
						holding your collateral in escrow. Get the funds you need, without
						selling your assets.
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
						onSubmit={handleSubmit}
					>
						<div
							className={cf(cr8.preview)}
							ref={previewRef}
						></div>
						<span className={cf(cr8.sideNote)}>
							Collateral preview for image NFTs
						</span>
						<ASASelect
							mode={'Quick Select Loan ASA'}
							handler={(x) => {
								setSelected(x)
							}}
							name='loan'
							unSelected={unSelected}
							activate={() => {
								setUnSelected(false)
								setLoanParams({
									...loanParams,
									tokenRequested: '',
								})
							}}
							setASA={() => {
								setLoanParams({
									...loanParams,
									tokenRequested: 10458941,
								})
							}}
						/>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='tokenRequested'
						>
							<span className={cf(cr8.formText)}>Other Loan ASA</span>
							<input
								type='number'
								name='tokenRequested'
								id='tokenRequested'
								value={loanParams?.tokenRequested ?? ''}
								onChange={handleChange}
								placeholder='Please enter the ASA ID'
								className={cf(cr8.formInput)}
								ref={requestedRef}
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
						<ASASelect
							mode={'Collateral ASA'}
							handler={(x) => {
								setOffered(x)

								setPreviewBgs()
							}}
							name='collateral'
							unSelected={unSelected_}
							activate={() => {
								setUnSelected_(false)
								setLoanParams({
									...loanParams,
									tokenOffered: '',
								})
							}}
							setASA={() => {
								setLoanParams({
									...loanParams,
									tokenOffered: 10458941,
								})
							}}
							mono={true}
						/>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='tokenOffered'
						>
							<span className={cf(cr8.formText)}>Other Collateral ASA</span>
							<input
								type='number'
								name='tokenOffered'
								id='tokenOffered'
								value={loanParams?.tokenOffered ?? ''}
								onChange={handleChange}
								placeholder='Please enter the ASA ID'
								className={cf(cr8.formInput)}
								ref={offeredRef}
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
								placeholder='1 ~ 3.7secs ∴ 1hr ~ 973, 1d ~ 23351'
								className={cf(cr8.formInput)}
							/>
						</label>
						<div className={cf(s.wMax, s.flex, s.flexCenter, cr8.submitDiv)}>
							<button
								type='submit'
								disabled={
									!(
										(selected || loanParams.tokenRequested) &&
										loanParams.amountOffered &&
										loanParams.amountRequested &&
										Number(loanParams?.paymentAmount ?? 0) >
											Number(loanParams?.amountRequested ?? 0) &&
										loanParams.paymentAmount &&
										(offered || loanParams.tokenOffered) &&
										loanParams.maturation &&
										Number(loanParams?.tokenRequested ?? 0) !==
											Number(loanParams?.tokenOffered ?? 0)
									)
								}
							>
								Complete Application
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Create
