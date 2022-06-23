import { ServiceBase } from './ServiceBase'

export class InjectableService extends ServiceBase {
	constructor(serviceUrl = null, transformerType = null) {
		super(serviceUrl, transformerType)
	}

	async startUp() {}
	async stop() {}
}
