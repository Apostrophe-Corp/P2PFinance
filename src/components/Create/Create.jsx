import React, { useState, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import cr8 from '../../styles/Create.module.css'
import { useReach } from '../../hooks'
import { setPfps, cf } from '../../utils'
import previewImg from '../../assets/images/logo.jpg' // TODO change this image

const Create = () => {
	const { mintNFT } = useReach()
	const [loanParams, setLoanParams] = useState({})

	const previewRef = useRef()

	const setPreviewBgs = () => {
		previewRef.current.style.background = `url(${previewImg})`
		previewRef.current.style.backgroundPosition = 'center'
		previewRef.current.style.backgroundRepeat = 'no-repeat'
		previewRef.current.style.backgroundSize = 'contain'
	}

	const handleInput = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		if (name === 'offeredContract' || name === 'tokenContract') {
			value = String(value)
			setLoanParams({
				...loanParams,
				[name]: value,
			})
		} else {
			value = Number(value)
			setLoanParams({
				...loanParams,
				[name]: value,
			})
		}

		if (loanParams['tokenOffered'] && loanParams['offeredContract']) {
			setPfps([previewRef, loanParams['tokenOffered'], loanParams['offeredContract'], false])
		}else{
			setPreviewBgs()
		}

		e.currentTarget.value = value
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(nftParams)
		mintNFT(loanParams)
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
								type='text'
								name='tokenRequested'
								id='tokenRequested'
								onInput={handleInput}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='tokenContract'
						>
							<span className={cf(cr8.formText)}>Loan Token Contract</span>
							<input
								type='text'
								name='tokenContract'
								id='tokenContract'
								onInput={handleInput}
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
								onInput={handleInput}
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
								onInput={handleInput}
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
								type='text'
								name='tokenOffered'
								id='tokenOffered'
								onInput={handleInput}
								placeholder=''
								className={cf(cr8.formInput)}
							/>
						</label>
						<label
							className={cf(cr8.formLabel)}
							htmlFor='offeredContract'
						>
							<span className={cf(cr8.formText)}>
								Collateral Token Contract
							</span>
							<input
								type='text'
								name='offeredContract'
								id='offeredContract'
								onInput={handleInput}
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
								onInput={handleInput}
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
								onInput={handleInput}
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
										loanParams.tokenOffered &&
										loanParams.amountOffered &&
										loanParams.amountRequested &&
										loanParams.paymentAmount &&
										loanParams.offeredContract &&
										loanParams.tokenContract &&
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
