import { ServiceBase } from 'services/base'
import { PetTransformer } from 'transformers/PetTransformer'

/**
 * Service class for consuming Pet microservice
 * at the node-REST API.
 */
class PetService extends ServiceBase {
	constructor() {
		super('pet', PetTransformer)
	}
}

export { PetService }
