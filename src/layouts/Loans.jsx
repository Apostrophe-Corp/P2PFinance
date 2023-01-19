import React, { useEffect, useState } from 'react'
import s from '../styles/Shared.module.css'
import l from '../styles/Loan.module.css'
import lg from '../styles/Landing.module.css'
import { cf, request } from '../utils'
import { Advert } from '../components/Advert'
import { useReach } from '../hooks'

const Loans = () => {
	const { adverts: loans, setAdverts: setLoans } = useReach()
	const [message, setMessage] = useState(
		!loans.length ? 'Loading...' : 'There are no Ads yet'
	)

	useEffect(() => {
		let retriever = undefined
		const getLoans = async () => {
			const loansRes = await request({
				path: `loans`,
				method: 'GET',
			})
			if (loansRes.success) {
				setLoans(loansRes.loans)
				setMessage(
					loansRes?.loans?.length ? 'Loading...' : 'There are no Ads yet'
				)
				clearInterval(retriever)
				retriever = undefined
			} else if (!loans?.length) {
				setMessage('There are no Ads yet')
			}
		}

		retriever = setInterval(getLoans, 5000)

		return () => {
			clearInterval(retriever)
		}
	}, [loans?.length, setLoans])

	return (
		<div
			className={cf(
				s.wMax,
				s.flex,
				s['flex_dColumn'],
				s.flexTop,
				l.loanContainer,
				s.p10
			)}
		>
			<div className={cf(s.wMax, s.p10, s.flex, s.flexCenter, lg.catchPhrase)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, lg.catchPhraseTextBlk)}>
					Give a helping hand.
				</h1>
			</div>
			<div className={cf(s.wMax, s.p0, s.flex, s.flexCenter)}>
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}
				>
					<div
						className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.userDetail)}
					>
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
							User
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
								l.assetName
							)}
						>
							Amount
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
								l.assetName
							)}
						>
							Collateral
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
								l.assetName
							)}
						>
							Payment
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
								l.assetName
							)}
						>
							Duration
						</span>
					</div>
					<div
						className={cf(
							s.flex,
							s.flex_dColumn,
							s.flexCenter,
							l.detail,
							l.lend
						)}
					>
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
							Trade
						</span>
					</div>
				</div>

				{loans.length ? (
					loans.map((el, i) => (
						<Advert
							ad={el}
							key={i}
						/>
					))
				) : (
					<div
						className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}
					>
						<h1>{message}</h1>
					</div>
				)}
			</div>
		</div>
	)
}

export default Loans
