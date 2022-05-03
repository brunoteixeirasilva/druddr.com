import { ServiceBase } from 'services/base'

/**
 * Service class for consuming Pet microservice
 * at the node-REST API.
 */
class PetService extends ServiceBase {
	constructor() {
		super('pet')
	}
}

export { PetService }
