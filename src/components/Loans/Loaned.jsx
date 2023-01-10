import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { cf, setPFPs, getASAInfo, viewASA } from '../../utils'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Loaned = ({ loan, ad = false }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const [assetName, setAssetName] = useState('Loan Token')
	const [collateral, setCollateral] = useState('Collateral Token')
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
			const assetData = loan.selected
				? { name: 'Algo' }
				: await getASAInfo(Number(loan.tokenRequested))
			setAssetName(
				`${assetData?.name}${assetData?.unit ? `, (${assetData.unit})` : ''}`
			)
			const collateralData = loan.offered
				? { name: 'Algo' }
				: await getASAInfo(Number(loan.tokenOffered))
			setCollateral(
				`${collateralData?.name}${
					collateralData?.unit ? `, ${collateralData.unit}` : ''
				}`
			)
		}
		updateValues()
	}, [loan.offered, loan.selected, loan.tokenOffered, loan.tokenRequested])

	useEffect(() => {
		let maturationTimer
		if (!ad)
			maturationTimer = setInterval(async () => {
				if (!loan.resolved) {
					const currentTime = instantReach.bigNumberToNumber(
						await instantReach.getNetworkTime()
					)
					const blocksRemaining =
						Number(loan.created) + Number(loan.maturation) - currentTime
					if (blocksRemaining > 0) setMaturation(blocksRemaining)
					else setMaturation('Deadline exceeded, unable to pay, collateral is now yours')
				} else {
					setMaturation('Deadline exceeded, full amount paid')
				}
			}, 5000)

		return () => {
			if (!ad) clearInterval(maturationTimer)
		}
	}, [ad, loan.created, loan.maturation, loan.resolved])

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
					l.d17,
					loan.selected ? '' : l.asa
				)}
				onClick={() => {
					viewASA(loan.tokenRequested)
				}}
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
					{ad.selected ? 'Algo' : assetName ?? 'Loan Token'}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					l.d17,
					loan.offered ? '' : l.asa
				)}
				onClick={() => {
					viewASA(loan.tokenOffered)
				}}
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
					{ad.offered ? 'Algo' : collateral ?? 'Collateral Token'}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					l.d17,
					loan.selected ? '' : l.asa
				)}
				onClick={() => {
					viewASA(loan.tokenRequested)
				}}
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
					{ad.selected ? 'Algo' : assetName ?? 'Loan Token'}
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
				{typeof maturation === 'number' && (
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
