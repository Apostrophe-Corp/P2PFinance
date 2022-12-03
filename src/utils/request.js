const serverURI = process.env.REACT_APP_SERVER_URI

export const request = async ({
	path = '',
	method = 'GET',
	body = {},
} = {}) => {
	if (method === 'GET')
		return await fetch(`${serverURI}/${path}`)
			.then((res) => res.json())
			.then((data) => ({ ...data, success: true }))
			.catch((error) => {
				console.log({ error })
				return {
					success: false,
					error,
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
		.then((data) => ({ ...data, success: true }))
		.catch((error) => {
			console.log({ error })
			return {
				success: false,
				error,
			}
		})
}
