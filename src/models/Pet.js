import { Animal } from './Animal'

export class Pet extends Animal {
	race = 'NA'
	colours = []

	constructor(
		id,
		name,
		age = 0,
		gender = 'female',
		race = 'NA',
		colours = []
	) {
		super(id, name, age, gender)

		// setting construction data
		this.race = race
		this.colours = colours
	}
}
