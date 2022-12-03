import React, { useState, useEffect } from 'react'
import s from '../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { cf, request } from '../utils'
import { Advert } from '../components/Advert'

const Loans = () => {
	const [loans, setLoans] = useState([])

	useEffect(() => {
		let retriever = undefined
		const getLoans = async () => {
			retriever = setInterval(async () => {
				const loansRes = await request({
					path: `/loans`,
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
	}, [])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, l.loanContainer)}>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
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
			{loans && loans.map((el) => <Advert ad={el} />)}
		</div>
	)
}

export default Loans
