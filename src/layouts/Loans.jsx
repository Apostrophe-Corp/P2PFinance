import React, { useEffect } from 'react'
import s from '../styles/Shared.module.css'
import l from '../styles/Loan.module.css'
import lg from '../styles/Landing.module.css'
import { cf, request } from '../utils'
import { Advert } from '../components/Advert'
import { useReach } from '../hooks'

const Loans = () => {
	const { adverts: loans, setAdverts: setLoans } = useReach()

	useEffect(() => {
		let retriever = undefined
		const getLoans = async () => {
			retriever = setInterval(async () => {
				const loansRes = await request({
					path: `loans`,
					method: 'GET',
				})
				if (loansRes.success) {
					setLoans(loansRes.loans)
					clearInterval(retriever)
					retriever = undefined
				}
			}, 10000)
		}
		getLoans()
		return () => {
			clearInterval(retriever)
			retriever = undefined
		}
	}, [setLoans])

	return (
		<div
			className={cf(s.wMax, s.flex, s['flex_dColumn'], l.loanContainer, s.p10)}
		>
			<div className={cf(s.wMax, s.p10, s.flex, s.flexCenter, lg.catchPhrase)}>
				<h1 className={cf(s.wMax, s.p0, s.m0, lg.catchPhraseTextBlk)}>
					Give someone a helping hand.
				</h1>
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container)}>
				<div className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.userDetail)}>
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
			</div>

			{loans &&
				loans.map((el, i) => (
					<Advert
						ad={el}
						key={i}
					/>
				))}
		</div>
	)
}

export default Loans
