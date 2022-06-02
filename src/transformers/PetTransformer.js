import { Pet } from 'models/Pet'

/**
 * Data Transformer from Pet class service domain.
 */
export class PetTransformer {
	processedData = []

	constructor(list = []) {
		this.processedData = this.pipe(list)
	}

	pipe(list = []) {
		return list.map(
			(item) =>
				new Pet(
					item.id,
					item.name,
					item.age,
					item.gender,
					item.race,
					item.colours
				)
		)
	}
}
