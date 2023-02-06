import { getASAInfo } from './tokenUtils'
import logo from '../assets/images/logo_.png'

/**
 * Sets the background of the element ref to that of the user's pfp
 * @param {any} others An array of arrays - [][ref, asset, blur]...
 */
export const setPFPs = async (others) => {
	if (others) {
		const oLen = others.length
		let i = 0
		for (i; i < oLen; i++) {
			try {
				const opts = others[i]
				const ref = opts[0]
				const nftInfo = await getASAInfo(opts[1])
				const pfp = nftInfo?.url ?? logo
				const blur = opts[2]
				ref.current.style.background = `${
					blur
						? 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.4)) ,'
						: ''
				}url(${pfp})`
				ref.current.style.backgroundPosition = 'center'
				ref.current.style.backgroundRepeat = 'no-repeat'
				ref.current.style.backgroundSize = blur ? 'cover' : 'contain'
			} catch (error) {
				// Do nothing
			}
		}
	}
}
