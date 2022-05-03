import { translate } from '../../src/utils/lang/translate'
import ComponentMap from '../../src/constants/componentMap'
import { routes } from '../../src/utils/routes'

describe('Druddr E2E Test', () => {
	it('Visits Druddr home', () => {
		cy.visit(routes.url)
		cy.contains(translate('title/app'))
	})

	it('Clicks bottom right Play button', () => {
		cy.visit(routes.url)
		cy.get(`[data-cy=${ComponentMap.playButton}]`).click()
		cy.url().should('include', routes.contact)
		cy.contains(translate('title/author'))
	})

	it('Tests top right Instagram button', () => {
		cy.visit(routes.url)
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).trigger('mouseover')
		cy.contains(translate('label/instagram'))
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).click()
		cy.url().should('include', 'instagram')
	})

	it('Tests bottom right Back button', () => {
		cy.visit(routes.url)
		cy.get(`[data-cy=${ComponentMap.playButton}]`).click()
		cy.get(`[data-cy=${ComponentMap.closeButton}]`).click()
		cy.contains(translate('label/we-build'))
	})

	it('Clicks bottom left API button', () => {
		cy.visit(routes.url)
		cy.get(`[data-cy=${ComponentMap.apiButton}]`).click()
		cy.url().should('include', routes.api)
	})

	it('Checks the PET fetching', () => {
		cy.intercept(
			{
				method: 'GET',
				url: `${routes.services.url}/pet`,
			},
			[]
		).as('getPets')
		cy.visit(routes.url)
		cy.get(`[data-cy=${ComponentMap.apiButton}]`).click()
		cy.get(`[data-cy=${ComponentMap.fetchButton}]`).click()
		cy.wait('@getPets')
	})
})
