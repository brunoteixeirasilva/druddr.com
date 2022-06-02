import { ObjectModel } from './ObjectModel'

export class Animal extends ObjectModel {
	name = ''
	age = 0
	gender = 'female'

	constructor(id, name, age = 0, gender = 'female') {
		super(id)

		// setting construction data
		this.name = name
		this.age = age
		this.gender = gender
	}
}
