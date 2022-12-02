import React, { useState, useEffect } from 'react'
import s from '../../styles/Shared.module.css'
import l from '../../styles/Loan.module.css'
import { cf, request } from '../../utils'
import { Advert } from '../components/Advert'

const Loans = () => {
	const [loans, setLoans] = useState([])
	const [loanNum, setLoanNum] = useState([])
	const [page, setPage] = useState(1)

	const PageNumbers = ({ index }) => {
		return (
			<div
				key={index}
				className={cf(s.flex, s.flexCenter, s.dInlineBlock, s.p5, s.bRad5)}
				onClick={() => {
					setPage(index)
				}}
			>
				{index}
			</div>
		)
	}

	useEffect(() => {
		let retriever = undefined
		const getLoans = async () => {
			retriever = setInterval(async () => {
				const loansRes = await request({
					path: `/loans?page=${page}`,
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
	}, [page])

	useEffect(() => {
		const x = [],
			runs = Math.ceil(loans.length / 5)
		let i = 0
		for (i; i < runs; i++) {
			x.push(i + 1)
		}
		setLoanNum(x)
	}, [loans])

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
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.pageNumbers)}>
				{loanNum && loanNum.map((el) => <PageNumbers index={el} />)}
			</div>
		</div>
	)
}

export default Loans
