export const trimNum = (el) => {
	let strDp = String(+(Math.round((el % 1) + 'e+3') + 'e-3'))
	if (el > 0) {
		if (strDp.length > 5)
			if (strDp[4] === strDp[5]) {
				strDp = strDp.substring(0, 5)
			} else if (strDp[5] > 4) {
				strDp[4] = strDp[4] + 1
				strDp = strDp.substring(0, 5)
			}
	} else if (strDp.length > 6) {
		if (strDp[5] === strDp[6]) strDp = strDp.substring(0, 6)
		else if (strDp[6] > 4) {
			;(strDp[5] = strDp[5] + 1)((strDp = strDp.substring(0, 6)))
		}
	}
	let str = String(el - (el % 1) + Number(strDp.substring(0, el < 0 ? 2 : 1)))
	str += el > 0 ? strDp.substring(1, 5) : strDp.substring(2, 6)
	return el < 0 && el - (el % 1) === 0 ? Number(str) * -1 : Number(str)
}
