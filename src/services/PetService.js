import { InjectableService } from 'services/base/InjectableService'
import { PetTransformer } from 'transformers/PetTransformer'

/**
 * Service class for consuming Pet microservice
 * at the node-REST API.
 */
class PetService extends InjectableService {
	constructor() {
		super('pet', PetTransformer)
	}
}

export { PetService }
