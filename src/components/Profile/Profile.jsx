import React, { useState, useRef, useEffect } from 'react'
import p from '../../styles/Profile.module.css'
import s from '../../styles/Shared.module.css'
import { useReach, useAuth } from '../../hooks'
import { cf, request, setPFPs } from '../../utils'

const Profile = ({ user }) => {
	const { alertThis, user: thisUser } = useReach()
	const { updateUser } = useAuth()
	const pfpRef = useRef()
	const [pfpData, setPfpData] = useState({
		pfp: user.pfp,
	})
	const [pfp, setPfp] = useState(0)

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		if (name === 'pfp') setPfp(Number(e.currentTarget.value))
	}

	const preview = async (e) => {
		e.preventDefault()
		setPFPs([[pfpRef, pfp, false]])
	}

	const save = async (e) => {
		e.preventDefault()
		const cPfp = pfp
		const result = await request({
			path: `users/${String(thisUser.address)}`,
			method: 'PATCH',
			body: {
				pfp,
			},
		})

		if (result.success) await updateUser(String(thisUser.address))
		alertThis({
			message: result.success
				? 'PFP successfully updated'
				: 'Sorry, unable to update PFP at this time',
			forConfirmation: false,
		})

		if (result.success) setPfpData({ pfp: cPfp })
	}

	useEffect(() => {
		if (!pfp) setPFPs([[pfpRef, pfpData.pfp, false]])
	}, [pfp, pfpData.pfp])

	useEffect(() => {
		setPFPs([[pfpRef, pfpData.pfp, false]])
	}, [pfpData.pfp])

	return (
		<div
			className={cf(
				s.wMax,
				s.flex,
				s.flexCenter,
				s['flex_dColumn'],
				p.profileContainer
			)}
		>
			<div
				className={cf(s.flex, s.flexCenter, p.pfp)}
				ref={pfpRef}
			></div>
			<div className={cf(s.flex, s.flexCenter, s.p5, p.userDetails)}>
				<span className={cf(s.dInlineBlock, s.flex, s.flexCenter)}>
					{user.username}
				</span>
				<div className={cf(s.wMax, s.flex, s.flexCenter, p.form)}>
					<label
						htmlFor='pfp'
						className={cf(s.wMax, s.flex, s.flexCenter, p.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							Current PFP ID: {user.pfp}
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, p.input)}
							placeholder='New PFP ID'
							id='pfp'
							name='pfp'
							onChange={handleInputChange}
						/>
					</label>
					<div className={cf(s.wMax, s.flex, s.flexCenter, p.btnBox)}>
						<button
							type='button'
							className={cf(p.previewBtn)}
							onClick={preview}
							disabled={!pfp}
						>
							Preview
						</button>
						<button
							type='button'
							className={cf(p.saveBtn)}
							disabled={!pfp}
							onClick={save}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
