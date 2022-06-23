import { InjectableService } from './InjectableService'

export class LazyInjectableService extends InjectableService {
	serviceType = null

	constructor(serviceToInject, serviceUrl = null, transformerType = null) {
		super(serviceUrl, transformerType)

		this.serviceType = serviceToInject
	}

	create() {
		return new this.serviceType()
	}
}
