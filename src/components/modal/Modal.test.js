import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Modal } from './Modal'

test('<Modal />', () => {
	const handleClose = jest.fn()

	const component = render(
		<Modal open={true} onClose={handleClose} title={'Test Title'}>
			{'Hola'}
		</Modal>
	)

	component.getByText('Hola')
})
