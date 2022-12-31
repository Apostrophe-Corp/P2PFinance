import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo } from '../../utils'
import { loanCtc } from '../../contracts'
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
		const ctc = instantReach.contract(loanCtc, JSON.parse(loan.contractInfo))
		const outStandingTimer = setInterval(async () => {
			const amountPaid = Number((await ctc.v.LoanViews.amountPaid())?.[1])
			console.log(amountPaid)
			const outstanding = Number(loan.paymentAmount) - amountPaid
			setOutStanding(outstanding)
		}, 5000)

		const maturationTimer = setInterval(async () => {
			const currentTime = instantReach.bigNumberToNumber(
				await instantReach.getNetworkTime()
			)
			const blocksRemaining = Number(loan.maturation) - currentTime
			setMaturation(blocksRemaining)
		}, 5000)

		return () => {
			clearInterval(outStandingTimer)
			clearInterval(maturationTimer)
		}
	}, [loan.contractInfo, loan.maturation, loan.paymentAmount])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, l.container)}>
			<div
				className={cf(s.flex, s.flex_dColumn, l.userDetail)}
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
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.bNone)}
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
					{collateral ?? 'Loading...'}
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
					{assetName ?? 'Loading...'}
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
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					s.p5,
					l.detail,
					l.lend
				)}
			>
				<button
					className={cf(
						s.wMax,
						s.dInlineBlock,
						s.flex,
						s.flexCenter,
						l.lendBtn
					)}
					onClick={() => {
						repay(loan.id, loan.contractInfo, Number(loan.tokenRequested))
					}}
				>
					Repay
				</button>
			</div>
		</div>
	)
}

export default Borrowed
