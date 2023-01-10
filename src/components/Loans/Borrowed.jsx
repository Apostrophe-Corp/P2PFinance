import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo, parseCurrency, viewASA } from '../../utils'
import { algo_nnt, nnt_algo, nnt_nnt } from '../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Borrowed = ({ loan, ad }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { repay, close, user } = useReach()
	const [ctc] = useState(
		user.account.contract(
			loan.selected ? algo_nnt : loan.offered ? nnt_algo : nnt_nnt,
			JSON.parse(loan.contractInfo)
		)
	)
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
	const [outStanding, setOutStanding] = useState(0)
	const [maturation, setMaturation] = useState(0)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		console.log({ loan })
		if (ad && loan?.borrowerInfo) {
			const pfp = Number(loan?.borrowerInfo?.pfp)
			setPFPs([
				[uCRef, pfp, true],
				[pfpRef, pfp, false],
			])
		} else if (!ad && loan?.lenderInfo) {
			const pfp = Number(loan?.lenderInfo?.pfp)
			setPFPs([
				[uCRef, pfp, true],
				[pfpRef, pfp, false],
			])
		}
	}, [ad, loan])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = loan.selected
				? { name: 'ALGO', unit: 'ALGO' }
				: await getASAInfo(Number(loan.tokenRequested))
			setAssetName(
				`${assetData?.name}${assetData?.unit ? `, (${assetData.unit})` : ''}`
			)
			const collateralData = loan.offered
				? { name: 'ALGO', unit: 'ALGO' }
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
		const outStandingTimer = setInterval(async () => {
			const amountPaid_ = (await ctc.v.LoanViews.amountPaid())?.[1]
			const amountPaid =
				amountPaid_ !== null
					? loan.offered
						? instantReach.formatCurrency(amountPaid_)
						: await parseCurrency(
								Number(loan.tokenRequested),
								instantReach.bigNumberToNumber(amountPaid_)
						  )
					: Number(loan.paymentAmount)

			// console.log(amountPaid)
			const outstanding = Number(loan.paymentAmount) - amountPaid
			// console.log(await parseCurrency(amountPaid))
			setOutStanding(outstanding)
			setLoading(false)
		}, 5000)

		let maturationTimer
		if (!ad)
			maturationTimer = setInterval(async () => {
				const currentTime = instantReach.bigNumberToNumber(
					await instantReach.getNetworkTime()
				)
				const blocksRemaining =
					Number(loan.created) + Number(loan.maturation) - currentTime

				setMaturation(
					outStanding === 0
						? '...'
						: blocksRemaining > 0
						? blocksRemaining
						: '...'
				)
			}, 5000)

		return () => {
			clearInterval(outStandingTimer)
			if (!ad) clearInterval(maturationTimer)
		}
	}, [
		ad,
		ctc.v.LoanViews,
		loan.contractInfo,
		loan.created,
		loan.maturation,
		loan.offered,
		loan.paymentAmount,
		loan.tokenRequested,
		outStanding,
		user.account,
	])

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
						{loan?.[`${ad ? 'borrowerInfo' : 'lenderInfo'}`]?.username}
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
					l.asa
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
					{assetName ?? 'Loan Token'}
				</span>
			</div>
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.asa)}
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
					{collateral ?? 'Collateral Token'}
				</span>
			</div>
			<div
				className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.asa)}
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
					{assetName ?? 'Loan Token'}
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
					{loading ? 'Loading...' : maturation}
				</span>
				{!loading && maturation !== '...' && (
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
						ad
							? close(loan.id, loan.contractInfo, loan.selected, loan.offered)
							: repay(
									loan.id,
									loan.contractInfo,
									Number(loan.tokenRequested),
									loan.selected,
									loan.offered
							  )
					}}
					disabled={
						ad
							? false
							: loading === true
							? true
							: !(!loan.resolved && maturation !== '...')
					}
				>
					{ad ? 'Drop Ad' : 'Repay'}
				</button>
			</div>
		</div>
	)
}

export default Borrowed
