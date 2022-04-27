import { routes } from 'utils/routes'

const HttpVerbs = {
	get: 'GET',
	post: 'POST',
	put: 'PUT',
	delete: 'DELETE',
	patch: 'PATCH',
	options: 'OPTIONS',
}
const servicePrefix = ''
const defaultMethod = 'GET'
const defaultOptions = {
	mode: 'cors',
	cache: 'no-cache',
	headers: { ContentType: 'text/json' },
}

/**
 * Class for serving the base of fetch requests,
 * by means of abstracting the consumption of the
 * 3rd party component/lib.
 *
 * Maps the following configurations to consume APIs:
 * * Base URL - Service is known and configurable.
 * * Service URL - The microservice/subservice reference URL
 * * Auth Token - The api Authentication token
 */
class ServiceBase {
	baseURL = routes.services.url
	serviceURL = ''
	authToken = null

	constructor(serviceURL = '') {
		this.serviceURL = `${servicePrefix}/${serviceURL}`
	}

	withToken(token) {
		this.authToken = token
	}

	revokeToken() {
		this.authToken = null
	}

	async doRequest(
		method = defaultMethod,
		entryId = null,
		additionalOptions = {}
	) {
		// Guaranteeing the baseURL does not contain a trailing slash, already
		let slashLessBaseUrl = this.baseURL
		slashLessBaseUrl = slashLessBaseUrl.endsWith('/')
			? slashLessBaseUrl.slice(0, -1)
			: slashLessBaseUrl

		let slashLessServiceUrl = this.serviceURL
		slashLessServiceUrl = slashLessServiceUrl.startsWith('/')
			? slashLessServiceUrl.slice(1, slashLessServiceUrl.length)
			: slashLessServiceUrl

		const requestOptions = {
			...defaultOptions,
			method: method,
			headers: {
				...defaultOptions.headers,
				...(!!this.authToken
					? { Authorization: `Bearer ${this.authToken}` }
					: {}),
			},
			...additionalOptions,
		}

		// in case an entry ID is specified
		const resolvedSuffix = !!entryId ? `/${entryId}` : ''

		return fetch(
			`${slashLessBaseUrl}/${slashLessServiceUrl}${resolvedSuffix}`,
			requestOptions
		).then((res) => res.json())
	}

	async doRequestWithPayload(
		method = defaultMethod,
		entryId = null,
		payload = null,
		additionalOptions = {}
	) {
		return this.doRequest(method, entryId, {
			...additionalOptions,
			body: payload,
		})
	}

	async get(entryId = null, additionalOptions = {}) {
		return this.doRequest(HttpVerbs.get, entryId, additionalOptions)
	}

	async post(entryId, payload, additionalOptions = {}) {
		return this.doRequestWithPayload(
			HttpVerbs.post,
			entryId,
			payload,
			additionalOptions
		)
	}

	async put(entryId, payload, additionalOptions = {}) {
		return this.doRequestWithPayload(
			HttpVerbs.put,
			entryId,
			payload,
			additionalOptions
		)
	}

	async delete(entryId, additionalOptions = {}) {
		return this.doRequest(HttpVerbs.delete, entryId, additionalOptions)
	}

	async patch(entryId, payload, additionalOptions = {}) {
		return this.doRequestWithPayload(
			HttpVerbs.patch,
			entryId,
			payload,
			additionalOptions
		)
	}
}

export { ServiceBase }
