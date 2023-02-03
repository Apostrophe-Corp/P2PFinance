import { getASAInfo } from "./tokenUtil"

export const fmtCurrency = async (tok, amt) => {
	const { decimals = 0 } = await getASAInfo(tok)
	const power = 10 ** Number(decimals)
	const newAmt = amt * power
	return Number(newAmt)
}