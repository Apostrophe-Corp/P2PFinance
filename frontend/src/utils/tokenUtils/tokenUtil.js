import { Arc69 } from './arc'
import { algoNodeFetch } from './algonode'
import { algoExplorerFetch } from './algoExplorer'

/**
 * @param asset ASA ID
 * @returns An Object: { name, unit, url, result } | {}
 */
export const getASAInfo = async (asset) => {
	const arc = new Arc69()
	let res = await algoNodeFetch(asset)
	if (res.success) return res
	else res = await algoExplorerFetch(asset)
	if (res.success) return res
	else res = await arc.fetch(asset)
	return res.success ? res : {}
}
