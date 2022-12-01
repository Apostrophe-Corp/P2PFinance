import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf } from '../../util'
import { loanCtc } from '../../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Loaned = ({ loan }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { lend } = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
	const [outStanding, setOutStanding] = useState(loan.paymentAmount)
	const [maturation, setMaturation] = useState(loan.maturation)

	// Get the user's pfp
	/**
	 * // Set the container bg
	 * const setPfp = (x = '') => {
	 * uCRef.current.style.background = `rgba(255,255,255,.4), url(${x}))`
	 * uCRef.current.style.backgroundPosition = 'center'
	 * uCRef.current.style.backgroundRepeat = 'no-repeat'
	 * uCRef.current.style.backgroundSize = 'contain'
	 * // Set the pfp
	 * pfpRef.current.style.background = `rgba(255,255,255,.4), url(${x}))`
	 * pfpRef.current.style.backgroundPosition = 'center'
	 * pfpRef.current.style.backgroundRepeat = 'no-repeat'
	 * pfpRef.current.style.backgroundSize = 'contain'
	 */

	// useEffect(()=>{},[])

	// Get the asset name
	// useEffect(()=>{},[])

	// Query the loan contract to update the outstanding debt and maturation
  useEffect(() => {
		const ctc = instantReach.contract(loanCtc, JSON.parse(loan.contractInfo))
    const outStandingTimer = setInterval(async () => {
      const amountPaid = (await ctc.v.LoanViews.amountPaid()?.[1])
      console.log(amountPaid)
      const outstanding = loan.paymentAmount - amountPaid
      setOutStanding(outstanding)
		}, 5000)

		const maturationTimer = setInterval(async () => {
			const currentTime = await instantReach.getNetworkTime()
			const blocksRemaining = loan.maturation - currentTime
			setMaturation(blocksRemaining)
		}, 5000)

		return () => {
			clearInterval(outStandingTimer)
			clearInterval(maturationTimer)
		}
	}, [])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter)}>
			<div
				className={cf(s.flex, s.flex_dColumn, l.userContainer)}
				ref={uCRef}
			>
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.userPfp)}
					ref={pfpRef}
				></div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, l.username)}>
					<span className={cf(s.dInlineBlock, s.p5, l.usernameText)}>
						{loan.username}
					</span>
				</div>
			</div>
			<div className={cf(s.flex, s.flexCenter, s.flex_dColumn)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter)}>
					<div className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail)}>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.quantity
							)}
						>
							{loan.amountRequested}
						</span>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.assetName
							)}
						>
							{assetName ?? 'Loading'}
						</span>
					</div>
					<div className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail)}>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.quantity
							)}
						>
							{loan.amountOffered}
						</span>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.assetName
							)}
						>
							{collateral ?? 'Loading'}
						</span>
					</div>
					<div className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail)}>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.quantity
							)}
						>
							{loan.paymentAmount}
						</span>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.assetName
							)}
						>
							{assetName ?? 'Loading'}
						</span>
					</div>
					<div className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail)}>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.quantity
							)}
						>
							{loan.maturation}
						</span>
						<span
							className={cf(
								s.wMax,
								s.flex,
								s.flexCenter,
								s.p5,
								s.dInlineBlock,
								l.assetName
							)}
						>
							Blocks
						</span>
					</div>
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter)}>
					<button
						className={cf(s.wMax, s.dInlineBlock, s.flex, s.flexCenter)}
						onClick={() => {
							lend(loan.contractInfo, loan.amountRequested, loan.tokenRequested)
						}}
					>
						Lend
					</button>
				</div>
			</div>
		</div>
	)
}

export default Loaned
