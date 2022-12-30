import { Arc69 } from './arc'

const arc = new Arc69()

/**
 * @param asset ASA ID
 * @returns An Object: { name, unit, url, result } | {}
 */
export const getASAInfo = async (asset) => {
	const { result: { name = '', 'unit-name': unit, url = '', decimals = 0, ...result } = {} } =
		await arc.fetch(asset)
	return { name, unit, url, decimals, result } ?? {} // the token data
}
