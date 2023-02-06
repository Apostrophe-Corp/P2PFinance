export const algoNodeFetch = async (assetId) => {
	const assetInfo = await fetch(
		`https://testnet-idx.algonode.cloud/v2/assets/${assetId}?include-all=true`
	)
		.then((res) => res.json())
		.then(
			(res) => ({ ...res?.asset?.params, success: true } ?? { success: false })
		)
		.catch((error) => ({ success: false }))
	return assetInfo
}
