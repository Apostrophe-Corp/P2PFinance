import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPfps, getTokenInfo } from '../../utils'
import { loanCtc } from '../../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Loaned = ({ loan }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { lend } = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
	const [maturation, setMaturation] = useState(loan.maturation)

	useEffect(() => {
		setPfps(
			[uCRef, loan.tokenOffered, loan.offeredContract, true],
			[pfpRef, loan.tokenOffered, loan.offeredContract, false]
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
		const maturationTimer = setInterval(async () => {
			const currentTime = await instantReach.getNetworkTime()
			const blocksRemaining = loan.maturation - currentTime
			setMaturation(blocksRemaining)
		}, 5000)

		return () => {
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
