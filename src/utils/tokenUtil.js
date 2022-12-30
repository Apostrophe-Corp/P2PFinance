import { Arc69 } from './arc'

const savedASAs = {}
const arc = new Arc69()

/**
 * @param asset ASA ID
 * @returns An Object: { name, unit, url, result } | {}
 */
export const getASAInfo = async (asset) => {
	if (savedASAs[asset]) return savedASAs[asset]

	const { result: { name = '', 'unit-name': unit, url = '', ...result } = {} } =
		await arc.fetch(asset)
	if (result.success) {
		savedASAs[asset] = { name, unit, url, result } // store the token data
	}
	return savedASAs[asset] ?? {} // the token data
}
