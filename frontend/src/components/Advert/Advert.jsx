import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo, viewASA } from '../../utils'

const Advert = ({ ad }) => {
	const navigate = useNavigate()
	const uCRef = useRef()
	const pfpRef = useRef()
	const { lend } = useReach()
	const [assetName, setAssetName] = useState('Loan Token')
	const [collateral, setCollateral] = useState('Collateral Token')
	const [maturation, setMaturation] = useState('Loading...')

	useEffect(() => {
		const pfp = Number(ad?.borrowerInfo?.pfp)
		setPFPs([
			[uCRef, pfp, true],
			[pfpRef, pfp, false],
		])
	}, [ad?.borrowerInfo?.pfp])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = ad.selected
				? { name: 'Algo' }
				: await getASAInfo(Number(ad.tokenRequested))
			setAssetName(
				`${assetData?.['name']}`
				// `${assetData?.name}${
				// 	assetData?.['unit-name'] ? `, (${assetData?.['unit-name']})` : ''
				// }`
			)
			const collateralData = ad.offered
				? { name: 'Algo' }
				: await getASAInfo(Number(ad.tokenOffered))
			setCollateral(
				`${collateralData?.['name']}`
				// `${collateralData?.name}${
				// 	collateralData?.['unit-name']
				// 		? `, (${collateralData?.['unit-name']})`
				// 		: ''
				// }`
			)
			const diffInHours = (Math.abs(ad.maturation) * 3.7) / 60 / 60
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
		}
		updateValues()
	}, [
		ad.offered,
		ad.selected,
		ad.tokenOffered,
		ad.tokenRequested,
		ad.maturation,
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
						{ad?.borrowerInfo?.username}
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
					ad.selected ? '' : l.asa
				)}
				onClick={() => {
					if (!ad.selected) viewASA(ad.tokenRequested)
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
					{ad.amountRequested}
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
					{ad.selected
						? 'Algo'
						: `${
								assetName && assetName !== 'undefined'
									? assetName
									: 'Loan Token'
						  }`}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					ad.offered ? '' : l.asa
				)}
				onClick={() => {
					if (!ad.offered) viewASA(ad.tokenOffered)
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
					{ad.amountOffered}
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
					{ad.offered
						? 'Algo'
						: `${
								collateral && collateral !== 'undefined'
									? collateral
									: 'Collateral Token'
						  }`}
				</span>
			</div>
			<div
				className={cf(
					s.flex,
					s.flex_dColumn,
					s.flexCenter,
					l.detail,
					ad.selected ? '' : l.asa
				)}
				onClick={() => {
					if (!ad.selected) viewASA(ad.tokenRequested)
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
					{ad.paymentAmount}
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
					{ad.selected
						? 'Algo'
						: `${
								assetName && assetName !== 'undefined'
									? assetName
									: 'Loan Token'
						  }`}
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
						;(await lend(
							Number(ad.id),
							ad.contractInfo,
							Number(ad.amountRequested),
							Number(ad.tokenRequested),
							Number(ad.tokenOffered),
							ad.selected,
							ad.offered
						)) && navigate('/account')
					}}
				>
					Lend
				</button>
			</div>
		</div>
	)
}

export default Advert
