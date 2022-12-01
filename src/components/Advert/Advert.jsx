import React, { useState, useRef, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { useReach } from '../../hooks'
import { cf } from '../../util'


const Advert = ({ ad }) => {
	const uCRef = useRef()
	const pfpRef = useRef()
	const {lend} = useReach()
	const [assetName, setAssetName] = useState('')
	const [collateral, setCollateral] = useState('')

	// Get the user's pfp
	/*
	const setPfp = (x = '') => {
		// Set the container bg
		uCRef.current.style.background = `rgba(255,255,255,.4), url(${x}))`
		uCRef.current.style.backgroundPosition = 'center'
		uCRef.current.style.backgroundRepeat = 'no-repeat'
		uCRef.current.style.backgroundSize = 'contain'
		// Set the pfp
		pfpRef.current.style.background = `rgba(255,255,255,.4), url(${x}))`
		pfpRef.current.style.backgroundPosition = 'center'
		pfpRef.current.style.backgroundRepeat = 'no-repeat'
		pfpRef.current.style.backgroundSize = 'contain'
	}
	*/
	// useEffect(()=>{},[])

	// Get the asset name
	// useEffect(()=>{},[])

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
						{ad.username}
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
					<button className={ cf(s.wMax, s.dInlineBlock, s.flex, s.flexCenter) } onClick={ () => {
						lend(ad.contractInfo, ad.amountRequested, ad.tokenRequested)
					}}>
						Lend
					</button>
				</div>
			</div>
		</div>
	)
}

export default Advert
