import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo, viewASA } from '../../utils'
import { algo_nnt, nnt_algo, nnt_nnt } from '../../contracts'
import { loadStdlib } from '@reach-sh/stdlib'

const instantReach = loadStdlib({ ...process.env, REACH_NO_WARN: 'Y' })

const Loaned = ({ loan, ad = false }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { user, close, alertThis, startWaiting, stopWaiting } = useReach()
	const [assetName, setAssetName] = useState('Loan Token')
	const [collateral, setCollateral] = useState('Collateral Token')
	const [maturation_, setMaturation_] = useState('Evaluating...')
	const [maturation, setMaturation] = useState('Evaluating...')
	const [ctc] = useState(
		user.account.contract(
			loan.selected ? algo_nnt : loan.offered ? nnt_algo : nnt_nnt,
			JSON.parse(loan.contractInfo)
		)
	)
	const [status, setStatus] = useState(true)

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
						day: Math.floor(diffInHours / 24),
					}
					const blocksRemaining_ = `${
						diffInUnits?.day
							? diffInUnits?.hr > 12
								? diffInUnits?.day + 1
								: diffInUnits?.day
							: diffInUnits?.hr
							? diffInUnits?.min > 30
								? diffInUnits?.hr + 1
								: diffInUnits?.hr
							: diffInUnits?.min
							? diffInUnits?.sec > 30
								? diffInUnits?.min + 1
								: diffInUnits?.min
							: diffInUnits?.sec > 0
							? diffInUnits?.sec
							: ''
					} ${
						diffInUnits?.day
							? (diffInUnits?.hr > 12 && diffInUnits?.day === 1) ||
							  diffInUnits?.day > 1
								? 'DAYS'
								: 'DAY'
							: diffInUnits?.hr
							? (diffInUnits?.min > 30 && diffInUnits?.hr === 1) ||
							  diffInUnits?.hr > 1
								? 'HOURS'
								: 'HOUR'
							: diffInUnits?.min
							? (diffInUnits?.sec > 30 && diffInUnits?.min === 1) ||
							  diffInUnits?.min > 1
								? 'MINUTES'
								: 'MINUTE'
							: diffInUnits?.sec
							? diffInUnits?.sec > 1
								? 'SECONDS'
								: 'SECOND'
							: 'A MOMENT'
					}${blocksRemaining < 0 ? ' AGO' : ''}`
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
								? 'Loan repaid in full'
								: 'Loan not fully paid, collateral sent to you'
							: loan.resolved
							? 'Loan repaid in full'
							: 'Evaluating...'
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
								? 'Loan repaid in full'
								: 'Loan not fully paid, collateral sent to you'
						)
						setMaturation(
							loan.resolved
								? 'Loan repaid in full'
								: 'Loan not fully paid, collateral sent to you'
						)
					} else {
						setMaturation_('Unable to evaluate maturation')
						setMaturation('Unable to evaluate maturation')
					}
				}
			}, 3600)

		return () => {
			if (!ad) clearInterval(maturationTimer)
		}
	}, [ad, ctc.v.LoanViews, loan.created, loan.maturation, loan.resolved])

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
					{ad.selected ? 'Algo' : assetName ?? 'Loan Token'}
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
					{maturation_}
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
						else {
							startWaiting()
							try {
								await ctc.apis.Lender.claim()
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
						}
					}}
					disabled={ad ? false : (!status && maturation >= 0) || status}
					id={`${ad ? 'ad' : 'loan'}-btn-${ad.id}-${ad.borrower}`}
				>
					{ad
						? 'Drop Ad'
						: !status && maturation > 0
						? 'Waiting'
						: !status && maturation <= 0
						? 'Claim'
						: 'Closed'}
				</button>
			</div>
		</div>
	)
}

export default Loaned
