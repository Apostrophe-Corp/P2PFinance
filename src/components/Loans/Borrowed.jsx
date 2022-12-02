import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPfps, getTokenInfo } from '../../utils'
import { loanCtc } from '../../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Borrowed = ({ loan }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { repay } = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
  const [outStanding, setOutStanding] = useState(loan.paymentAmount)
  const [maturation, setMaturation] = useState(loan.maturation)
  
  useEffect(() => {
	setPfps(
		[uCRef, loan?.lenderInfo?.pfp, loan?.lenderInfo?.pfpContract, true],
		[pfpRef, loan?.lenderInfo?.pfp, loan?.lenderInfo?.pfpContract, false]
	)
}, [])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = await getTokenInfo(loan.tokenRequested, loan.tokenContract)
			setAssetName(
				`${assetData?.name}${assetData?.symbol ? `, ${assetData.symbol}` : ''}`
			)
			const collateralData = await getTokenInfo(
				loan.tokenOffered,
				loan.tokenContract
			)
			setCollateral(
				`${collateralData?.name}${
					collateralData?.symbol ? `, ${collateralData.symbol}` : ''
				}`
			)
		}
		updateValues()
	}, [])

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
						{loan?.lenderInfo?.username}
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
							{outStanding}
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
							{maturation}
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
							repay(loan.contractInfo, loan.tokenRequested)
						}}
					>
						Repay
					</button>
				</div>
			</div>
		</div>
	)
}

export default Borrowed
