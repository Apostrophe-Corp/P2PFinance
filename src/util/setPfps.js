// Script to retrieve a pfp
const savedPfps = {}

const getPfp = async (asset) => {
	if (savedPfps[asset]) return savedPfps[asset]
	// get the asset media file
	if (/*the media file is valid*/ 1 > 1) {
		savedPfps[asset] = 1 > 1 // store the media file
	}
	return savedPfps[asset] ?? '' // the media file
}

const setPfps = async (...others) => {
	// Set the pfp
	if (others) {
		const oLen = others.length
		let i = 0
		for (i; i < oLen; i++) {
			const opts = others[i]
			const ref = opts[0]
			const pfp = await getPfp(opts[1])
			const blur = opts[2]
			ref.current.style.background = `${
				blur ? 'rgba(255,255,255,.4)' : 'transparent'
			}, url(${pfp}))`
			ref.current.style.backgroundPosition = 'center'
			ref.current.style.backgroundRepeat = 'no-repeat'
			ref.current.style.backgroundSize = 'contain'
			await new Promise((resolve) => setTimeout(resolve, 250))
		}
	}
}
