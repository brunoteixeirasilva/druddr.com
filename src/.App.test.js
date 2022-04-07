import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from './App'

test('renders the component', () => {
	const component = render(<App />)

	component.getByText('Construir')
})
