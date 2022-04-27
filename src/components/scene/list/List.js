import ApiDropdown from '../../dropdown/calls/ApiDropdown'
import React, { useEffect, useState } from 'react'
import ComponentMap from 'constants/componentMap'
import { CloseButton } from '../../button'
import routes from '../../../utils/routes/routes'
import Button from '@material-ui/core/Button'

/**
 * API page
 *
 * @description Created the component
 * @author lologrignola
 * @version 1.0
 *
 * @param {Object} props
 */

function List() {
	const objTest = [
		{
			name: 'Lorenzo',
			age: '21',
		},
		{
			name: 'Juan',
			age: '23',
		},
		{
			name: 'Julian',
			age: '22',
		},
	]
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)

		return () => {
			setMounted(false)
		}
	}, [])

	return (
		<>
			<div>
				<ApiDropdown />
				<Button variant="contained" color="primary">
					Fetch
				</Button>
			</div>

			{objTest.map((x) => {
				return (
					<p key={x}>
						Name is {x.name} and age is {x.age}
					</p>
				)
			})}

			<CloseButton
				dataCy={ComponentMap.closeButton}
				buttonColor="primary"
				onClick={async (event, history) => {
					setMounted(false)
					history.push(routes.index)
				}}
			/>
		</>
	)
}

export default List
