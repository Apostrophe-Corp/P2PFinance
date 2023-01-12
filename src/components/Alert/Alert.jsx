import React, { useEffect, useState } from 'react'
import alt from '../../styles/Alert.module.css'
import s from '../../styles/Shared.module.css'
import { useReach } from '../../hooks'
import { cf } from '../../utils'

const Alert = () => {
	const { alertInfo, showAlert, setShowAlert, promiseOfConfirmation } =
		useReach()

	const [active, setActive] = useState(showAlert)
	const [response, setResponse] = useState('')
	const [alertClass, setAlertClass] = useState(
		cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer)
	)

	const decide = (decision) => {
		promiseOfConfirmation.resolve && promiseOfConfirmation.resolve(decision)
		setShowAlert(false)
	}

	const submitResponse = (e) => {
		e.preventDefault()
		decide(response)
		setResponse('')
	}

	const cancel = () => {
		if (
			(alertInfo.canClear || alertInfo.prompt) &&
			promiseOfConfirmation.reject
		) {
			promiseOfConfirmation.reject(null)
			setResponse('')
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		let terminate = null
		let present = null
		if (showAlert === false) {
			setAlertClass(
				cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer, alt.invisible)
			)
			terminate = setTimeout(() => {
				setAlertClass(cf(alt.terminate))
				setActive(false)
				clearTimeout(terminate)
			}, 300)
		}
		if (showAlert === true) {
			terminate && clearTimeout(terminate)
			setActive(true)
			setAlertClass(
				cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer, alt.invisible)
			)
			present = setTimeout(() => {
				setAlertClass(cf(s.wMax, s.flex, s.flexCenter, alt.alertContainer))
				clearTimeout(present)
			}, 300)
		}
		return () => {
			terminate && clearTimeout(terminate)
			present && clearTimeout(present)
		}
	}, [showAlert])

	return (
		<>
			{active && (
				<div className={alertClass}>
					<div
						className={cf(s.wMax, alt.alertMask)}
						onClick={cancel}
					></div>
					<div className={cf(s.flex, s.flexCenter, alt.alertDetails)}>
						<div className={cf(s.wMax, s.flex, s.flexCenter, alt.alertMessage)}>
							<span
								className={cf(s.wMax, s.dInlineBlock, alt.alertMessageText)}
							>
								{alertInfo.message}
							</span>
						</div>
						{alertInfo.prompt ? (
							<div className={cf(s.wMax, s.flex, s.flexCenter, alt.promptBox)}>
								<form
									className={cf(s.wMax, s.flex, s.flexCenter, alt.promptForm)}
									onSubmit={submitResponse}
								>
									<label
										className={cf(
											s.wMax,
											s.flex,
											s.flexCenter,
											s.dInlineBlock,
											alt.promptInputBox
										)}
										htmlFor='response'
									>
										<input
											className={cf(s.wMax, alt.response)}
											name='response'
											id='response'
											placeholder='Enter your response'
											autoFocus={true}
											onChange={(e) => {
												setResponse(e.currentTarget.value)
											}}
										/>
									</label>
									<div
										className={cf(
											s.wMax,
											s.flex,
											s.spaceXAround,
											s.spaceYCenter,
											alt.confirmationBox
										)}
									>
										<button
											type='submit'
											onClick={() => {
												decide(response)
											}}
											disabled={
												!(alertInfo.callback
													? response !== '' &&
													  Number(response) !== 0 &&
													  alertInfo.callback(response)
													: response !== '')
											}
											className={cf(s.flex, s.flexCenter, alt.button, alt.ok)}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						) : alertInfo.forConfirmation ? (
							<div
								className={cf(
									s.wMax,
									s.flex,
									s.spaceXAround,
									s.spaceYCenter,
									alt.confirmationBox
								)}
							>
								<button
									type='button'
									onClick={() => {
										decide(true)
									}}
									className={cf(s.flex, s.flexCenter, alt.button, alt.accept)}
								>
									{alertInfo.accept}
								</button>
								<button
									type='button'
									onClick={() => {
										decide(false)
									}}
									className={cf(
										s.flex,
										s.flexCenter,
										alt.button,
										alertInfo.neutral ? alt.accept : alt.decline
									)}
								>
									{alertInfo.decline}
								</button>
							</div>
						) : (
							!alertInfo.persist && (
								<div
									className={cf(
										s.wMax,
										s.flex,
										s.spaceXAround,
										s.spaceYCenter,
										alt.confirmationBox
									)}
								>
									<button
										type='button'
										onClick={() => {
											decide(true)
										}}
										className={cf(s.flex, s.flexCenter, alt.button, alt.ok)}
									>
										Okay
									</button>
								</div>
							)
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default Alert
