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
		setAdverts,
	} = useReach()

	const { authUser } = useAuth()
	const [message, setMessage] = useState(
		!loanedLoans.length ? 'Loading...' : ''
	)
	const [message_, setMessage_] = useState(
		!borrowedLoans.length ? 'Loading...' : ''
	)
	const [message__, setMessage__] = useState(
		!userAdverts.length ? 'Loading...' : ''
	)

	useEffect(() => {
		let retriever = undefined

		const quickCheck = async () => {
			let loansRes = undefined,
				retries = 0
			do {
				loansRes = await request({
					path: `loans`,
					method: 'GET',
				})
			} while (
				(loansRes?.message === 'internal server error' ||
					loansRes?.error === 500) &&
				retries < 3
			)
			if (loansRes.success) {
				const presentAdverts = loansRes.loans
				setAdverts(loansRes.loans)
				const remainingAdverts = presentAdverts.filter(
					(el) => el.borrowerInfo.username === authUser.username
				)
				setUserAdverts([...remainingAdverts])
				setMessage__(
					remainingAdverts?.loans?.length ? 'Loading...' : 'No active advert'
				)
				clearInterval(retriever)
				retriever = undefined
			}
		}

		const getLoans = async () => {
			let res = undefined, retries = 0
			do {
				res = await request({
					path: 'loans',
					method: 'POST',
					body: {
						searchTerm: authUser.username,
					},
				})
			} while (
				(res?.message === 'internal server error' || res?.error === 500) &&
				retries < 3
			)
			if (res.success) {
				if (res.loans) {
					const tempLoans = res.loans
					const borrowed = tempLoans.filter(
						(el) => el.borrower === authUser.address && el.lender !== ''
					)
					setMessage_(
						borrowed?.loans?.length ? 'Loading...' : `No borrow history`
					)
					setBorrowedLoans(borrowed)
					const loaned = tempLoans.filter(
						(el) => el.lender === authUser.address
					)
					setMessage(loaned?.loans?.length ? 'Loading...' : `No loan history`)
					setLoanedLoans(loaned)
				}
			}
		}

		retriever = setInterval(() => {
			getLoans()
			quickCheck()
		}, 5000)

		return () => {
			clearInterval(retriever)
		}
	}, [
		adverts,
		authUser.address,
		authUser.username,
		setAdverts,
		setBorrowedLoans,
		setLoanedLoans,
		setUserAdverts,
	])

	return (
		<div
			className={cf(s.wMax, s.flex, s.flexCenter, s.p10, l.profileContainer)}
		>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<UserProfile user={authUser} />
			</div>
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
						Your Adverts
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
						Drop
					</span>
				</div>
			</div>
			{userAdverts.length ? (
				userAdverts.map((el, i) => (
					<Borrowed
						loan={el}
						key={i}
						ad={true}
					/>
				))
			) : (
				<div
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.subHeader)}
				>
					<h3>{message__}</h3>
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
						Borrower (Loaned)
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
						Claim
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
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.subHeader)}
				>
					<h3>{message}</h3>
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
						Lender (Borrowed)
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
					className={cf(s.wMax, s.flex, s.flexCenter, l.container, l.subHeader)}
				>
					<h3>{message_}</h3>
				</div>
			)}
		</div>
	)
}

export default Profile
