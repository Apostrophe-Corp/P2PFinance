import React, { useEffect, useState } from 'react'
import s from '../styles/Shared.module.css'
import l from '../styles/Loan.module.css'
import { useAuth, useReach } from '../hooks'
import { cf, request } from '../utils'
import { Profile as UserProfile } from '../components/Profile'
import { Borrowed, Loaned } from '../components/Loans'

const Profile = () => {
	const {
		borrowedLoans,
		setBorrowedLoans,
		loanedLoans,
		setLoanedLoans,
		userAdverts,
		setUserAdverts,
		adverts,
	} = useReach()

	const { authUser } = useAuth()
	const [message, setMessage] = useState(
		!loanedLoans.length ? 'Loading...' : ''
	)
	const [message_, setMessage_] = useState(
		!loanedLoans.length ? 'Loading...' : ''
	)
	const [message__, setMessage__] = useState(
		!userAdverts.length ? 'Loading...' : ''
	)

	useEffect(() => {
		let retriever = undefined

		const getLoans = async () => {
			// const res = await request({
			// 	path: 'loans',
			// 	method: 'POST',
			// 	body: {
			// 		searchTerm: String(authUser.username),
			// 	},
			// })
			// console.log(res, String(authUser.username))
			const res = await request({
				path: 'loans',
				method: 'POST',
				body: {
					searchTerm: authUser.username,
				},
			})
			if (res.success) {
				if (res.loans) {
					const tempLoans = res.loans
					const borrowed = tempLoans.filter(
						(el) => el.borrower === authUser.address
					)
					setMessage_(
						borrowed?.loans?.length ? 'Loading...' : `You've not been given a loan yet`
					)
					setBorrowedLoans(borrowed)
					const loaned = tempLoans.filter(
						(el) => el.lender === authUser.address
					)
					setMessage(loaned?.loans?.length ? 'Loading...' : `You've not given a loan yet`)
					setLoanedLoans(loaned)
					// console.log({ tempLoans, borrowed, loaned })
				}
			}

			if (adverts) {
				const presentAdverts = adverts
				const remainingAdverts = presentAdverts.filter(
					(el) => el.borrowerInfo.username === authUser.username
				)
				setUserAdverts([...remainingAdverts])
				setMessage__(
					remainingAdverts?.length ? 'Loading...' : `You have no active Ads`
				)
			} else {
				setMessage__(adverts?.length ? 'Loading...' : `You have no active Ads`)
			}
		}

		retriever = setInterval(async () => {
			await getLoans()
		}, 5000)

		return () => {
			clearInterval(retriever)
			retriever = undefined
		}
	}, [
		adverts,
		authUser.address,
		authUser.username,
		setBorrowedLoans,
		setLoanedLoans,
		setUserAdverts,
	])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, s.p10)}>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<UserProfile user={authUser} />
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}>
				<div
					className={cf(
						s.flex,
						s.flex_dColumn,
						s.flexCenter,
						l.userDetail,
						l.d32
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
						Adverts
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Amount
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Collateral
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Payment
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Maturation
					</span>
				</div>
			</div>
			{userAdverts.length ? (
				userAdverts.map((el, i) => (
					<Loaned
						loan={el}
						key={i}
					/>
				))
			) : (
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}
				>
					<h1>{message__}</h1>
				</div>
			)}
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}>
				<div
					className={cf(
						s.flex,
						s.flex_dColumn,
						s.flexCenter,
						l.userDetail,
						l.d32
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
						Borrower (Loaned)
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Amount
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Collateral
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Payment
					</span>
				</div>
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.d17)}
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
						Maturation
					</span>
				</div>
			</div>
			{loanedLoans.length ? (
				loanedLoans.map((el, i) => (
					<Loaned
						loan={el}
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
			<div className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}>
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
						You (Debts)
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
				<div
					className={cf(s.flex, s.flex_dColumn, s.flexCenter, l.detail, l.lend)}
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
						Offset
					</span>
				</div>
			</div>
			{borrowedLoans.length ? (
				borrowedLoans.map((el, i) => (
					<Borrowed
						loan={el}
						key={i}
					/>
				))
			) : (
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.header)}
				>
					<h1>{message_}</h1>
				</div>
			)}
		</div>
	)
}

export default Profile
