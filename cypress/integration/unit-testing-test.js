import * as React from 'react'
import { mount } from '@cypress/react'
import ModalTitle from '../../src/components/modal/title/ModalTitle'

describe('Modal Title test', () => {
	it('renders the message inside', () => {
		const title = 'hola'

		mount(<ModalTitle text={title}></ModalTitle>)

		cy.contains(title)
	})
})
