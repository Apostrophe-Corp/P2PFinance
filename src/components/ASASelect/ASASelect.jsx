import React, { useState } from 'react'
import { BsRecord, BsRecord2 } from 'react-icons/bs'
import styles from '../../styles/ASASelect.module.css'
import { cf } from '../../utils'

const ASASelect = ({
	mode,
	handler,
	name,
	unSelected,
	activate,
	setASA,
	mono = false,
}) => {
	const [toggler, setToggler] = useState(true)
	const toggle = () => {
		setToggler(!toggler)
	}
	return (
		<>
			<span className={cf(styles.signIn)}>{mode}</span>
			<div className={cf(styles.type)}>
				<input
					type='radio'
					name={name}
					className={cf(styles.radioBtn, unSelected ? styles.unSelected : '')}
					id={`pri-user-${name}`}
					value={`primary-${name}`}
					checked={toggler}
					onChange={() => {
						toggle()
					}}
					onClick={() => {
						activate()
						handler(true)
					}}
				/>
				<label
					htmlFor={`pri-user-${name}`}
					id={`pri-user-label-${name}`}
					className={cf(styles.typeLabel)}
				>
					ALGO <BsRecord className={cf(styles.checkIcon1)} />{' '}
					<BsRecord2 className={cf(styles.checkIcon)} />
					<span className={cf(styles.typeLabelSpan)}>
						The native token of the Algorand network
					</span>
				</label>
				{!mono && (
					<input
						type='radio'
						name={name}
						className={cf(styles.radioBtn, unSelected ? styles.unSelected : '')}
						id={`sec-user-${name}`}
						value={`secondary-${name}`}
						checked={!toggler}
						onChange={() => {
							toggle()
						}}
						onClick={() => {
							activate()
							handler(false)
							setASA()
						}}
					/>
				)}
				{!mono && (
					<label
						htmlFor={`sec-user-${name}`}
						className={cf(styles.typeLabel)}
						id={`sec-user-label-${name}`}
					>
						USDC <BsRecord className={cf(styles.checkIcon1)} />{' '}
						<BsRecord2 className={cf(styles.checkIcon)} />
						<span className={cf(styles.typeLabelSpan)}>
							A verified stable coin on the Algorand network
						</span>
					</label>
				)}
			</div>
		</>
	)
}

export default ASASelect
