import { PetService } from 'services/PetService'

const API = {
	movies: {
		key: 'movies',
		service: null,
	},
	tokens: {
		key: 'tokens',
		service: null,
	},
	pets: {
		key: 'pets',
		service: new PetService(),
	},
	users: {
		key: 'users',
		service: null,
	},
	comments: {
		key: 'comments',
		service: null,
	},
	default: null,
}

API.default = API.pets

export { API }
