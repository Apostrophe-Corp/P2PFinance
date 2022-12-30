import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPFPs, getASAInfo } from '../../utils'

const Advert = ({ ad }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { lend } = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')

	useEffect(() => {
		const pfp = Number(ad?.borrowerInfo?.pfp)
		setPFPs([
			[uCRef, pfp, true],
			[pfpRef, pfp, false],
		])
	}, [ad?.borrowerInfo?.pfp])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = await getASAInfo(Number(ad.tokenRequested))
			// console.log(assetData)
			setAssetName(
				`${assetData?.name}${
					assetData?.['unit-name'] ? `, (${assetData?.['unit-name']})` : ''
				}`
			)
			const collateralData = await getASAInfo(Number(ad.tokenOffered))
			// console.log(collateralData)
			setCollateral(
				`${collateralData?.name}${
					collateralData?.['unit-name']
						? `, (${collateralData?.['unit-name']})`
						: ''
				}`
			)
		}
		updateValues()
	}, [ad.tokenOffered, ad.tokenRequested])

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
					{`${
						assetName && assetName !== 'undefined' ? assetName : 'Loading...'
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
					{`${
						collateral && collateral !== 'undefined' ? collateral : 'Loading...'
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
					{`${
						assetName && assetName !== 'undefined' ? assetName : 'Loading...'
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
					{ad.maturation}
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
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<button
					className={cf(s.wMax, s.dInlineBlock, s.flex, s.flexCenter)}
					onClick={() => {
						lend(ad.id, ad.contractInfo, ad.amountRequested, ad.tokenRequested)
					}}
				>
					Lend
				</button>
			</div>
		</div>
	)
}

export default Advert
