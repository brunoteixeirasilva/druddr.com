import { routes } from 'utils/routes'

// Service imports
import { MessageModalService } from 'services/MessageModalService'

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
	transformerType = null

	constructor(serviceURL = '', transformerType = null) {
		this.serviceURL = `${servicePrefix}/${serviceURL}`
		this.transformerType = transformerType
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

		const dataProcessor = this.transformerType

		return fetch(
			`${slashLessBaseUrl}/${slashLessServiceUrl}${resolvedSuffix}`,
			requestOptions
		)
			.then((res) => res.json())
			.then((res) => {
				const jsonObject = res

				// The returned object from a request should be a valid JSON object kind
				if (!jsonObject) throw Error('JSON response is not valid.')

				if (jsonObject.error) throw Error(jsonObject)

				debugger

				// something returned successfully, processing in case of tranformer existing
				return !dataProcessor
					? jsonObject.data
					: new dataProcessor(jsonObject.data).processedData
			})
			.catch((ex) => {
				let resultantObject = null

				// TODO: connect with error services
				if (typeof ex === 'string')
					return new MessageModalService().error(
						`Ops! A serious error ocurred.\r\n${ex}`
					)

				// do the error management
				switch (ex.code) {
					case 401:
						resultantObject = ex.message
						// we can trigger the display of an authentication required
						break
					default:
						resultantObject = ex.message
						// nothing done with defaults
						break
				}

				return resultantObject
			})
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
