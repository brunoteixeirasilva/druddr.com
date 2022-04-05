import { translate } from '../../src/utils/lang/translate'
import ComponentMap from '../../src/constants/componentMap'
import router from '../../src/utils/routes/routes'

describe('Druddr E2E Test', () => {
	it('Visits Druddr home', () => {
		cy.visit(router.url)
		cy.contains(translate('title/app'))
	})

	it('Clicks bottom right Play button', () => {
		cy.get(`[data-cy=${ComponentMap.playButton}]`).click()
		cy.url().should('include', router.contact)
		cy.contains(translate('title/author'))
	})

	it('Tests top right Instagram button', () => {
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).trigger('mouseover')
		cy.contains(translate('label/instagram'))
		cy.get(`[data-cy=${ComponentMap.instagramButton}]`).click()
		cy.url().should('include', 'instagram')
		cy.go('back')
	})

	it('Tests bottom right Back button', () => {
		cy.get(`[data-cy=${ComponentMap.closeButton}]`).click()
		cy.contains(translate('label/we-build'))
	})
})
