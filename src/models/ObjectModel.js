export class ObjectModel {
	id = ''
	createdOn = new Date()
	deleted = false
	deletedOn = null

	constructor(id, createdOn) {
		this.id = id
		this.createdOn = createdOn
	}
}
