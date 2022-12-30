import React, { useEffect } from 'react'
import s from '../styles/Shared.module.css'
import l from '../styles/Loan.module.css'
import { useAuth, useReach } from '../hooks'
import { cf, request } from '../utils'
import { Profile as UserProfile } from '../components/Profile'
import { Borrowed, Loaned } from '../components/Loans'

const Profile = () => {
	const { borrowedLoans, setBorrowedLoans, loanedLoans, setLoanedLoans } =
		useReach()

	const { authUser } = useAuth()

	useEffect(() => {
		let retriever = undefined

		const getLoans = async () => {
			const res = await request({
				path: 'loans',
				method: 'POST',
				body: {
					searchTerm: authUser.username,
				},
			})

			if (res.success) {
				const tempLoans = res.loans
				const borrowed = tempLoans.filter(
					(el) => el.borrower === authUser.address
				)
				setBorrowedLoans(borrowed)
				const loaned = tempLoans.filter((el) => el.lender === authUser.address)
				setLoanedLoans(loaned)
			}
		}

		retriever = setInterval(async () => {
			await getLoans()
		}, 10000)

		return () => {
			clearInterval(retriever)
			retriever = undefined
		}
	}, [authUser.address, authUser.username, setBorrowedLoans, setLoanedLoans])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, s.p10)}>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<UserProfile user={authUser} />
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter, l.headers)}>
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
							Borrower
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
				{loanedLoans &&
					loanedLoans.map((el, i) => (
						<Loaned
							loan={el}
							key={i}
						/>
					))}
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container)}>
				<div className={cf(s.wMax, s.flex, s.flexCenter)}>
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
							Lender
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
							Outstanding
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
							Maturation
						</span>
					</div>
				</div>
				{borrowedLoans &&
					borrowedLoans.map((el, i) => (
						<Borrowed
							loan={el}
							key={i}
						/>
					))}
			</div>
		</div>
	)
}

export default Profile
