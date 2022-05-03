import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { List } from './List'

test('<List />', () => {
	const component = render(<List />)

	component.getByText('Fetch')
})
