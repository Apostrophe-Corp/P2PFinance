import React, { useState, useEffect } from 'react'
import { useReach } from '../../hooks'
import { cf } from '../../utils'
import styles from '../../styles/LoadingPreview.module.css'

const LoadingPreview = () => {
	const { sleep, showPreloader, setShowPreloader, setProcessing } = useReach()
	const [preloaderClass, setPreloaderClass] = useState(
		cf(styles.container, styles.invisible)
	)

	useEffect(() => {
		setPreloaderClass(styles.container)
	}, [])

	useEffect(() => {
		const close = async () => {
			const fadeOff = async () => {
				setPreloaderClass(cf(styles.container, styles.invisible))
				await sleep(400)
				setPreloaderClass(cf(styles.terminated))
			}
			if (showPreloader === false) {
				await fadeOff()
				setProcessing(false)
			}
		}
		close()
	}, [showPreloader, setProcessing, sleep])

	return (
		<div className={preloaderClass}>
			<div
				className={cf(styles.closeBtn)}
				onClick={() => {
					setShowPreloader(false)
				}}
			>
				Close
			</div>
			<div className={cf(styles.circle, styles.c1)}></div>
			<div className={cf(styles.circle, styles.c2)}></div>
			<div className={cf(styles.circle, styles.c3)}></div>
		</div>
	)
}

export default LoadingPreview
