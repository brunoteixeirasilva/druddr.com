import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ModalTitle from './ModalTitle'

test('<ModalTitle />', () => {
	const component = render(<ModalTitle text="Hola" />)

	console.log(component)
	component.getByText('Hola')
})
