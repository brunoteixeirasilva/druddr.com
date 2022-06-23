import { LazyInjectableService } from 'services/base/LazyInjectableService'

import { PetService } from 'services/PetService'
import { ApiService } from 'services/ApiService'
import { MessageModalService } from 'services/MessageModalService'

const BackBone = {
	api: null,
	comments: {
		key: 'comments',
		service: null,
	},
	movies: {
		key: 'movies',
		service: null,
	},
	pets: {
		key: 'pets',
		service: new LazyInjectableService(PetService),
		// service: new PetService(),
	},
	tokens: {
		key: 'tokens',
		service: null,
	},
	users: {
		key: 'users',
		service: null,
	},
	messageModal: {
		key: 'messageModal',
		service: new MessageModalService(),
	},
	default: null,
}

BackBone.api = {
	key: 'api',
	service: () => new ApiService(BackBone),
}

BackBone.default = BackBone.pets

export { BackBone }
