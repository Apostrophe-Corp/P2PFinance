export const algoExplorerFetch = async (assetId) => {
	const assetInfo = await fetch(
		`https://indexer.testnet.algoexplorerapi.io/v2/assets/${assetId}`
	)
		.then((res) => res.json())
		.then(
			(res) => ({ ...res?.asset?.params, success: true } ?? { success: false })
		)
		.catch((error) => ({ success: false }))
	return assetInfo
}
