import { translate } from '../../src/utils/lang/translate'
import ComponentMap from '../../src/constants/componentMap'

describe('My First Test', () => {
	it('Visits the Druddr home page and checks if is correctly loaded', () => {
		cy.visit('http://localhost:3000/')
		cy.contains(translate('title/app'))
	})

	it('Clicks bottom button and checks if its loaded', () => {
		cy.get(`[data-cy=${ComponentMap.playButton}]`).click()
		cy.url().should('include', '/contact')
		cy.contains('Bruno Teixeira')
	})

	it('Tests if top right button works properly', () => {
		cy.get('.HeaderContainer-button-4').trigger('mouseover')
		cy.contains('@druddr')
		cy.get('.HeaderContainer-button-4').click()
		cy.url().should('include', 'instagram')
		cy.go('back')
	})

	it('Tests bottom right button', () => {
		cy.get(`[data-cy=${ComponentMap.closeButton}]`).click()
		cy.contains('Construir')
	})
})
