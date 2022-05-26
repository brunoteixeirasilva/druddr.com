import { store } from 'StateLayer'
import { open, close } from 'redux/messageModal'

import { MessageType } from 'components/modal/message'

export class MessageModalService {
	dispatch = null

	constructor() {
		this.dispatch = store.dispatch
	}

	async open(text, type) {
		this.dispatch(open({ text, type }))
	}

	async success(text) {
		this.open(text, MessageType.success)
	}

	async error(text) {
		this.open(text, MessageType.error)
	}

	async info(text) {
		this.open(text, MessageType.info)
	}

	async warning(text) {
		this.open(text, MessageType.warning)
	}

	async close() {
		this.dispatch(close())
	}
}
