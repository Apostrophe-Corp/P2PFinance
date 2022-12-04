import React, { useState, useRef, useEffect } from 'react'
import p from '../../styles/Profile.module.css'
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

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		if (name === 'pfp') setPfp(e.currentTarget.value)
		else setAddress(e.currentTarget.value)
	}

	const preview = async (e) => {
		e.preventDefault()
		setPfps([pfpRef, pfp, address, false])
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
		if (!(pfp && address))
			setPfps([pfpRef, pfpData.pfp, pfpData.address, false])
	}, [pfp, address, pfpData.pfp, pfpData.address])

	useEffect(() => {
		setPfps([pfpRef, pfpData.pfp, pfpData.address, false])
	}, [pfpData.pfp, pfpData.address])

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
							disabled={!(pfp && address)}
						>
							Preview
						</button>
						<button
							type='button'
							className={cf(p.saveBtn)}
							disabled={!(pfp && address)}
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
