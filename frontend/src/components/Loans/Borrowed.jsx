import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo, parseCurrency, viewASA } from '../../utils'
import { algo_nnt, nnt_algo, nnt_nnt } from '../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Borrowed = ({ loan, ad = false }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { repay, close, user, alertThis, startWaiting, stopWaiting } =
		useReach()
	const [ctc] = useState(
		user.account.contract(
			loan.selected ? algo_nnt : loan.offered ? nnt_algo : nnt_nnt,
			JSON.parse(loan.contractInfo)
		)
	)
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')
	const [outStanding, setOutStanding] = useState('Loading...')
	const [maturation_, setMaturation_] = useState('Loading...')
	const [maturation, setMaturation] = useState('Loading...')
	const [loading, setLoading] = useState(true)
	const [status, setStatus] = useState(true)

	useEffect(() => {
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
	}, [
		loan,
		loan.offered,
		loan.selected,
		loan.tokenOffered,
		loan.tokenRequested,
	])

	useEffect(() => {
		let outStandingTimer
		if (!ad)
			outStandingTimer = setInterval(async () => {
				const amountPaid_ = (await ctc.v.LoanViews.amountPaid())?.[1]
				const amountPaid =
					amountPaid_ !== null
						? loan.selected
							? instantReach.formatCurrency(amountPaid_)
							: await parseCurrency(
									Number(loan.tokenRequested),
									instantReach.bigNumberToNumber(amountPaid_)
							  )
						: Number(loan.paymentAmount)
				const outstanding = Number(loan.paymentAmount) - amountPaid
				setOutStanding(outstanding)
				setLoading(false)
			}, 5000)

		let maturationTimer
		if (!ad)
			maturationTimer = setInterval(async () => {
				const beginBlock_ = (await ctc.v.LoanViews.beginBlock())?.[1]
				if (beginBlock_ !== null) {
					const beginBlock = instantReach.bigNumberToNumber(beginBlock_)
					const currentTime = instantReach.bigNumberToNumber(
						await instantReach.getNetworkTime()
					)
					const blocksRemaining =
						Number(beginBlock) + Number(loan.maturation) - currentTime
					const contractStatus = (await ctc.v.LoanViews.loanPaid())?.[1]
					const diffInHours = (Math.abs(blocksRemaining) * 3.7) / 60 / 60
					const diffInUnits = {
						sec: Math.floor(((((diffInHours % 24) % 1) * 60) % 1) * 60),
						min: Math.floor(((diffInHours % 24) % 1) * 60),
						hr: Math.floor(diffInHours % 24),
						day: Math.floor((diffInHours / 24) % 30),
						month: Math.floor(diffInHours / 24 / 30),
					}
					const blocksRemaining_ = `${
						diffInUnits?.month
							? diffInUnits?.day >= 15
								? diffInUnits?.month + 1
								: diffInUnits?.month
							: diffInUnits?.day
							? diffInUnits?.hr >= 12
								? diffInUnits?.day + 1
								: diffInUnits?.day
							: diffInUnits?.hr
							? diffInUnits?.min >= 30
								? diffInUnits?.hr + 1
								: diffInUnits?.hr
							: diffInUnits?.min
							? diffInUnits?.sec >= 30
								? diffInUnits?.min + 1
								: diffInUnits?.min
							: diffInUnits?.sec > 0
							? diffInUnits?.sec
							: ''
					} ${
						diffInUnits?.month
							? (diffInUnits?.day >= 12 && diffInUnits?.month === 1) ||
							  diffInUnits?.month > 1
								? 'MONTHS'
								: 'MONTH'
							: diffInUnits?.month
							? (diffInUnits?.hr >= 12 && diffInUnits?.day === 1) ||
							  diffInUnits?.day > 1
								? 'DAYS'
								: 'DAY'
							: diffInUnits?.hr
							? (diffInUnits?.min >= 30 && diffInUnits?.hr === 1) ||
							  diffInUnits?.hr > 1
								? 'HOURS'
								: 'HOUR'
							: diffInUnits?.min
							? (diffInUnits?.sec >= 30 && diffInUnits?.min === 1) ||
							  diffInUnits?.min > 1
								? 'MINUTES'
								: 'MINUTE'
							: diffInUnits?.sec
							? diffInUnits?.sec > 1
								? 'SECONDS'
								: 'SECOND'
							: 'A MOMENT'
					}`
					setStatus(
						contractStatus === false
							? false
							: contractStatus === null
							? true
							: true
					)
					setMaturation(
						contractStatus === false
							? blocksRemaining_
							: contractStatus === null
							? loan.resolved
								? 'Repaid in full, collateral returned'
								: 'Not fully paid, paid amounts refunded, collateral lost'
							: loan.resolved
							? 'Repaid in full, collateral returned'
							: 'Loading...'
					)
					setMaturation_(
						contractStatus === false
							? blocksRemaining < 1
								? 'Ended'
								: blocksRemaining_
							: contractStatus === null
							? loan.resolved
								? 'Repaid in full, collateral returned'
								: 'Not fully paid, paid amounts refunded, collateral lost'
							: loan.resolved
							? 'Repaid in full, collateral returned'
							: 'Loading...'
					)
				} else {
					const contractStatus = (await ctc.v.LoanViews.loanPaid())?.[1]
					setStatus(
						contractStatus === false
							? false
							: contractStatus === null
							? true
							: true
					)
					if (contractStatus === null || contractStatus === true) {
						if (!ad) clearInterval(maturationTimer)
						setMaturation_(
							loan.resolved
								? 'Repaid in full, collateral returned'
								: 'Not fully paid, paid amounts refunded, collateral lost'
						)
						setMaturation(
							loan.resolved
								? 'Repaid in full, collateral returned'
								: 'Not fully paid, paid amounts refunded, collateral lost'
						)
					} else {
						setMaturation_('Unable to evaluate maturation')
						setMaturation('Unable to evaluate maturation')
					}
				}
			}, 3600)
		else {
			const diffInHours = (Math.abs(loan.maturation) * 3.7) / 60 / 60
			const diffInUnits = {
				sec: Math.floor(((((diffInHours % 24) % 1) * 60) % 1) * 60),
				min: Math.floor(((diffInHours % 24) % 1) * 60),
				hr: Math.floor(diffInHours % 24),
				day: Math.floor((diffInHours / 24) % 30),
				month: Math.floor(diffInHours / 24 / 30),
			}
			const blocksRemaining_ = `${
				diffInUnits?.month
					? diffInUnits?.day >= 15
						? diffInUnits?.month + 1
						: diffInUnits?.month
					: diffInUnits?.day
					? diffInUnits?.hr >= 12
						? diffInUnits?.day + 1
						: diffInUnits?.day
					: diffInUnits?.hr
					? diffInUnits?.min >= 30
						? diffInUnits?.hr + 1
						: diffInUnits?.hr
					: diffInUnits?.min
					? diffInUnits?.sec >= 30
						? diffInUnits?.min + 1
						: diffInUnits?.min
					: diffInUnits?.sec > 0
					? diffInUnits?.sec
					: ''
			} ${
				diffInUnits?.month
					? (diffInUnits?.day >= 12 && diffInUnits?.month === 1) ||
					  diffInUnits?.month > 1
						? 'MONTHS'
						: 'MONTH'
					: diffInUnits?.month
					? (diffInUnits?.hr >= 12 && diffInUnits?.day === 1) ||
					  diffInUnits?.day > 1
						? 'DAYS'
						: 'DAY'
					: diffInUnits?.hr
					? (diffInUnits?.min >= 30 && diffInUnits?.hr === 1) ||
					  diffInUnits?.hr > 1
						? 'HOURS'
						: 'HOUR'
					: diffInUnits?.min
					? (diffInUnits?.sec >= 30 && diffInUnits?.min === 1) ||
					  diffInUnits?.min > 1
						? 'MINUTES'
						: 'MINUTE'
					: diffInUnits?.sec
					? diffInUnits?.sec > 1
						? 'SECONDS'
						: 'SECOND'
					: 'A MOMENT'
			}`

			setMaturation(blocksRemaining_)
			setMaturation_(blocksRemaining_)
			setLoading(false)
		}
		return () => {
			if (!ad) clearInterval(outStandingTimer)
			if (!ad) clearInterval(maturationTimer)
		}
	}, [
		ad,
		ctc.v.LoanViews,
		loan.created,
		loan.maturation,
		loan.selected,
		loan.paymentAmount,
		loan.tokenRequested,
		outStanding,
		loan.resolved,
		loan.maturation,
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
					loan.selected ? '' : l.asa
				)}
				onClick={() => {
					if (!loan.selected) viewASA(loan.tokenRequested)
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
					{loan.selected ? 'Algo' : assetName ?? 'Loan Token'}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					loan.offered ? '' : l.asa
				)}
				onClick={() => {
					if (!loan.offered) viewASA(loan.tokenOffered)
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
					{loan.offered ? 'Algo' : collateral ?? 'Collateral Token'}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					loan.selected ? '' : l.asa
				)}
				onClick={() => {
					if (!loan.selected) viewASA(loan.tokenRequested)
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
					{ad ? loan.paymentAmount : outStanding}
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
					{loan.selected ? 'Algo' : assetName ?? 'Loan Token'}
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
					{loading ? 'Loading...' : maturation_}
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
					onClick={async () => {
						if (ad)
							await close(
								loan.id,
								loan.contractInfo,
								loan.selected,
								loan.offered
							)
						else if (!status && maturation <= 0) {
							startWaiting()
							try {
								await ctc.apis.Borrower.claimRefund()
								stopWaiting()
								alertThis({
									message: 'Success',
									forConfirmation: false,
								})
							} catch (error) {
								console.log({ error })
								stopWaiting()
								alertThis({
									message: 'Unable to process your request',
									forConfirmation: false,
								})
							}
						} else
							await repay(
								loan.id,
								loan.contractInfo,
								Number(loan.tokenRequested),
								loan.selected,
								loan.offered
							)
					}}
					disabled={ad ? false : status}
					id={`${ad ? 'ad' : 'loan'}-btn-${loan.id}-${loan.borrower}`}
				>
					{ad
						? 'Drop Ad'
						: !status && maturation > 0
						? 'Repay'
						: !status && maturation <= 0
						? 'Claim Refund'
						: 'Closed'}
				</button>
			</div>
		</div>
	)
}

export default Borrowed
