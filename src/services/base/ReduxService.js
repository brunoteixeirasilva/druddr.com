import { store } from 'StateLayer'

/**
 * Used for services which dispatch changes to store
 */
export class ReduxService {
	/**
	 *
	 */
	dispatch = null

	constructor(dispatch = store.dispatch) {
		this.dispatch = dispatch
	}
}
