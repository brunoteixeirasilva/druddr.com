import { translate } from '../../src/utils/lang/translate'
import ComponentMap from '../../src/constants/componentMap'
import router from '../../src/utils/routes/routes'

describe('Druddr E2E Test', () => {
	it('Visits the Druddr home page and checks if is correctly loaded', () => {
		cy.visit(router.url)
		cy.contains(translate('title/app'))
	})

	it('Clicks bottom button and checks if its loaded', () => {
		cy.get(`[data-cy=${ComponentMap.playButton}]`).click()
		cy.url().should('include', router.contact)
		cy.contains(translate('title/author'))
	})

	it('Tests if top right button works properly', () => {
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).trigger('mouseover')
		cy.contains(translate('label/instagram'))
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).click()
		cy.url().should('include', 'instagram')
		cy.go('back')
	})

	it('Tests bottom right button', () => {
		cy.get(`[data-cy=${ComponentMap.closeButton}]`).click()
		cy.contains(translate('label/we-build'))
	})
})
