import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { cf, setPFPs, getASAInfo } from '../../utils'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Loaned = ({ loan }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
	const [maturation, setMaturation] = useState(Number(loan.maturation))

	useEffect(() => {
		const pfp = Number(loan?.borrowerInfo?.pfp)
		setPFPs([
			[uCRef, pfp, true],
			[pfpRef, pfp, false],
		])
	}, [loan?.borrowerInfo?.pfp])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = await getASAInfo(Number(loan.tokenRequested))
			setAssetName(
				`${assetData?.name}${assetData?.unit ? `, (${assetData.unit})` : ''}`
			)
			const collateralData = await getASAInfo(Number(loan.tokenOffered))
			setCollateral(
				`${collateralData?.name}${
					collateralData?.unit ? `, ${collateralData.unit}` : ''
				}`
			)
		}
		updateValues()
	}, [loan.tokenOffered, loan.tokenRequested])

	useEffect(() => {
		const maturationTimer = setInterval(async () => {
			const currentTime = instantReach.bigNumberToNumber(
				await instantReach.getNetworkTime()
			)
			const blocksRemaining =
				Number(loan.created) + Number(loan.maturation) - currentTime

			setMaturation(blocksRemaining > 0 ? blocksRemaining : 'Ended')
		}, 5000)

		return () => {
			clearInterval(maturationTimer)
		}
	}, [loan.created, loan.maturation])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, l.container)}>
			<div
				className={cf(s.flex, s.flex_dColumn, l.userDetail, l.d32)}
				ref={uCRef}
			>
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.userPfp)}
					ref={pfpRef}
				></div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, l.username)}>
					<span className={cf(s.dInlineBlock, s.p5, l.usernameText)}>
						{loan?.borrowerInfo?.username}
					</span>
				</div>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					l.bNone,
					l.d17
				)}
			>
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
					{loan?.amountRequested}
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
					{assetName ?? 'Loading...'}
				</span>
			</div>
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
			>
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
					{loan?.amountOffered}
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
					{collateral ?? 'Loading...'}
				</span>
			</div>
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
			>
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
					{assetName ?? 'Loading...'}
				</span>
			</div>
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
			>
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
				{maturation !== 'Ended' && (
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
				)}
			</div>
		</div>
	)
}

export default Loaned
