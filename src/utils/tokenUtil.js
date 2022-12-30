import { Arc69 } from './arc'


/**
 * @param asset ASA ID
 * @returns An Object: { name, unit, url, result } | {}
*/
export const getASAInfo = async (asset) => {
	const arc = new Arc69()
	return (await arc.fetch(asset)) ?? {} // the token data
}
