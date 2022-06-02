import { ReduxService } from './base/ReduxService'

import { changeApi, setData } from 'redux/apiData'
import { ErrorCodeMap } from 'constants/ErrorCodeMap'
import { translate } from 'utils/lang/translate'

/**
 * Keeps centralized API calling functionalities
 */
export class ApiService extends ReduxService {
	api = null

	constructor(API) {
		super()
		this.api = API
	}

	async change(newApi) {
		this.dispatch(changeApi(newApi))
	}

	async requestData(selectedApi) {
		try {
			const ServiceWrapper = this.api[selectedApi]

			if (!ServiceWrapper) throw Error(ErrorCodeMap.ServiceNotConfigured)

			if (!ServiceWrapper.service)
				throw Error(ErrorCodeMap.ServiceUnavailable)

			return ServiceWrapper.service.get().then((d) => {
				return this.dispatch(setData({ data: d }))
			})
		} catch (ex) {
			return this.captureException(ex)
		}
	}

	captureException(ex) {
		let message = null

		switch (ex.message) {
			case ErrorCodeMap.ServiceNotConfigured: {
				message = translate('error/serviceNotConfigured')
				break
			}
			case ErrorCodeMap.ServiceUnavailable: {
				message = translate('error/serviceUnavailable')
				break
			}
			default: {
				message = translate('error/general')
				break
			}
		}

		this.api.messageModal.service.error(message)
	}
}
