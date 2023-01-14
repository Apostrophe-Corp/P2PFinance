const serverURI = "http://44.193.73.52/api/v1.0"

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
			return {
				...error[0],
				success: false,
			}
		})
}
