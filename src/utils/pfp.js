import { getNFTInfo } from './tokenUtil'

/**
 * Sets the background of the element ref to that of the user's pfp
 * @param  {...any} others An array of arrays - [][ref, asset, address, blur]...
 */
export const setPfps = async (...others) => {
	if (others) {
		const oLen = others.length
		let i = 0
		for (i; i < oLen; i++) {
			const opts = others[i]
			const ref = opts[0]
			const nftInfo = await getNFTInfo(opts[1], opts[2])
			const pfp =
				nftInfo?.media?.gateway ??
				nftInfo?.media?.image ??
				(nftInfo?.media?.raw
					? nftInfo?.media?.raw.indexOf('ipfs://') === 0
						? 'https://gateway.ipfs.io/ipfs/' + nftInfo?.media?.raw.slice(7)
						: nftInfo?.media?.raw
					: '')
			const blur = opts[3]
			ref.current.style.background = `${
				blur ? 'rgba(255,255,255,.4)' : 'transparent'
			}, url(${pfp}))`
			ref.current.style.backgroundPosition = 'center'
			ref.current.style.backgroundRepeat = 'no-repeat'
			ref.current.style.backgroundSize = 'contain'
			await new Promise((resolve) => setTimeout(resolve, 500))
		}
	}
}
