const serverURI = process.env.REACT_APP_SERVER_URI

export const request = async ({
	path = '',
	method = 'GET',
	body = {},
} = {}) => {
	if (method === 'GET')
		return await fetch(`${serverURI}/${path}`)
			.then((res) => res.json())
			.then((data) => ({ ...data[0], success: data?.[0]?.success ?? true }))
			.catch((error) => {
				// console.log({ error })
				return {
					...error[0],
					success: false,
				}
			})
	return await fetch(`${serverURI}/${path}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((res) => res.json())
		.then((data) => ({ ...data[0], success: data?.[0]?.success ?? true }))
		.catch((error) => {
			// console.log({ error })
			return {
				...error[0],
				success: false,
			}
		})
}
