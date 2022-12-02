import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf, setPfps, getTokenInfo } from '../../utils'

const Advert = ({ ad }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const { lend } = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')

	useEffect(() => {
		setPfps(
			[uCRef, ad?.borrowerInfo?.pfp, ad?.borrowerInfo?.pfpContract, true],
			[pfpRef, ad?.borrowerInfo?.pfp, ad?.borrowerInfo?.pfpContract, false]
		)
	}, [ad?.borrowerInfo?.pfp, ad?.borrowerInfo?.pfpContract])

	useEffect(() => {
		const updateValues = async () => {
			const assetData = await getTokenInfo(ad.tokenRequested, ad.tokenContract)
			setAssetName(
				`${assetData?.name}${assetData?.symbol ? `, ${assetData.symbol}` : ''}`
			)
			const collateralData = await getTokenInfo(
				ad.tokenOffered,
				ad.tokenContract
			)
			setCollateral(
				`${collateralData?.name}${
					collateralData?.symbol ? `, ${collateralData.symbol}` : ''
				}`
			)
		}
		updateValues()
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
						{ad?.borrowerInfo?.username}
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
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter)}>
					<button
						className={cf(s.wMax, s.dInlineBlock, s.flex, s.flexCenter)}
						onClick={() => {
							lend(ad.contractInfo, ad.amountRequested, ad.tokenRequested)
						}}
					>
						Lend
					</button>
				</div>
			</div>
		</div>
	)
}

export default Advert
