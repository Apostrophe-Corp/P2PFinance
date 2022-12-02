const alchemyTokURI = process.env.REACT_APP_ALCHEMY_TOK_API_URI
const alchemyNFTURI = process.env.REACT_APP_ALCHEMY_NFT_API_URI
const alchemyKEY = process.env.REACT_APP_ALCHEMY_API_KEY

const savedTokens = {}
const savedNFTs = {}

export const getTokenInfo = async (asset, address) => {
	if (savedTokens[asset]) return savedTokens[asset]

	const { result: { name = '', symbol = '', logo = '', ...result } = {} } = await fetch(
		`${alchemyTokURI}/${alchemyKEY}`,
		{
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				id: Number(asset),
				jsonrpc: '2.0',
				method: 'alchemy_getTokenMetadata',
				params: [String(address)],
			}),
		}
	)
		.then((res) => res.json())
		.then((data) => ({ ...data, success: true }))
		.catch((error) => {
			console.log({ error })
			return {
				success: false,
				error,
			}
		})
	if (result.success) {
		savedTokens[asset] = { name, symbol, logo, result } // store the token data
	}
	return savedTokens[asset] ?? {} // the token data
}

export const getNFTInfo = async (asset, address) => {
	if (savedNFTs[asset]) return savedNFTs[asset]

	const {
		media: [{ gateway = '', raw = '' }] = [],
		contractMetadata: { name = '', symbol = '' } = {},
		metadata: { image = '', name: title = '' } = {},
		...result
	} = await fetch(
		`${alchemyNFTURI}/${alchemyKEY}/getNFTMetadata?contractAddress=${String(
			address
		)}&tokenId=${asset}&refreshCache=false`,
		{
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
		}
	)
		.then((res) => res.json())
		.then((data) => ({ ...data, success: true }))
		.catch((error) => {
			console.log({ error })
			return {
				success: false,
				error,
			}
		})
	
	if (result.success) {
		savedNFTs[asset] = {
			media: { gateway, raw, image },
			token: { name, symbol, title },
			result,
		} // store the NFT data
	}
	return savedNFTs[asset] ?? {} // the NFT data
}
