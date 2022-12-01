import React, { useState, useRef, useEffect } from 'react'
import p from '../../styles/Profiles.module.css'
import s from '../../styles/Shared.module.css'
import { useReach } from '../../hooks'
import { cf } from '../../utils'

const Profile = ({ user }) => {
	const [pfp, setPfp] = useState(0)

	const handlePfpChange = (e) => {
		setPfp(e.currentTarget.value)
	}

	const preview = (e) => {
		// Just in case this causes the form to submit
    e.preventDefault()
    
	}

	const save = (e) => {
		e.preventDefault()
		// Make a patch request to update the user's pfp
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, p.profileContainer)}>
			<div className={cf(s.flex, s.flexCenter, p.pfp)}></div>
			<div className={cf(s.flex, s.flexCenter, s.p5, p.userDetails)}>
				<span className={cf(s.dInlineBlock, s.flex, s.flexCenter)}>
					{user.username}
				</span>
				<form className={cf(s.wMax, s.flex, s.flexCenter, p.form)}>
					<label
						htmlFor='pfp'
						className={cf(s.wMax, s.flex, s.flexCenter, p.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}></span>
						<input
							className={cf(s.wMax, s.dInlineBlock, p.input)}
							placeholder='New PFP ID'
							id='pfp'
							name='pfp'
						/>
					</label>
					<div className={cf(s.wMax, s.flex, s.flexCenter, p.btnBox)}>
						<button
							type='button'
							className={cf(p.previewBtn)}
						>
							Preview
						</button>
						<button
							type='submit'
							className={cf(p.saveBtn)}
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile
