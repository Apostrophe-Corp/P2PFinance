import React, { useState, useRef, useEffect } from 'react'
import p from '../../styles/Profiles.module.css'
import s from '../../styles/Shared.module.css'
import { useReach } from '../../hooks'
import { cf, request, setPfps } from '../../utils'

const Profile = ({ user }) => {
	const { alertThis } = useReach()
	const pfpRef = useRef()
	const [pfpData, setPfpData] = useState({
		pfp: user.pfp,
		address: user.pfpContract,
	})
	const [pfp, setPfp] = useState(0)
	const [address, setAddress] = useState('')
	let previewTimer = undefined

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		if (name === pfp) setPfp(e.currentTarget.value)
		else setAddress(e.currentTarget.value)
	}

	const preview = async (e) => {
		e.preventDefault()
		const clearTimer = () => {
			clearTimeout(previewTimer)
			previewTimer = undefined
		}
		setPfps([pfpRef, pfp, address, false])
		if (previewTimer !== undefined) {
			clearTimer()
		}
		previewTimer = setTimeout(() => {
			setPfps([pfpRef, pfpData.pfp, pfpData.address, false])
			clearTimer()
		}, 10000)
	}

	const save = async (e) => {
		e.preventDefault()
		const cPfp = pfp
		const cAddress = address
		const result = await request({
			path: '/users',
			method: 'PATCH',
			body: {
				pfp,
				pfpContract: address,
			},
		})

		alertThis({
			message: result.success
				? 'PFP successfully updated'
				: 'Sorry, unable to update PFP at this time',
			forConfirmation: false,
		})

		if (result.success) setPfpData({ pfp: cPfp, address: cAddress })
	}

	useEffect(() => {
		setPfps([pfpRef, pfpData.pfp, pfpData.address, false])
	}, [pfpData])

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, p.profileContainer)}>
			<div
				className={cf(s.flex, s.flexCenter, p.pfp)}
				ref={pfpRef}
			></div>
			<div className={cf(s.flex, s.flexCenter, s.p5, p.userDetails)}>
				<span className={cf(s.dInlineBlock, s.flex, s.flexCenter)}>
					{user.username}
				</span>
				<form
					className={cf(s.wMax, s.flex, s.flexCenter, p.form)}
					onSubmit={save}
				>
					<label
						htmlFor='pfp'
						className={cf(s.wMax, s.flex, s.flexCenter, p.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							NFT ID
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, p.input)}
							placeholder='New PFP ID'
							id='pfp'
							name='pfp'
							onChange={handleInputChange}
						/>
					</label>
					<label
						htmlFor='address'
						className={cf(s.wMax, s.flex, s.flexCenter, p.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							NFT Contract
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, p.input)}
							placeholder='New PFP Contract Address'
							id='address'
							name='address'
							onChange={handleInputChange}
						/>
					</label>
					<div className={cf(s.wMax, s.flex, s.flexCenter, p.btnBox)}>
						<button
							type='button'
							className={cf(p.previewBtn)}
							onClick={preview}
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
