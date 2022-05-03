import React, { useEffect, useState, useMemo, useCallback } from 'react'
import Button from '@material-ui/core/Button'

import { useSelector, useDispatch } from 'react-redux'

import ApiDropdown from '../../dropdown/calls/ApiDropdown'
import ComponentMap from 'constants/componentMap'
import { CloseButton } from '../../button'
import { routes } from 'utils/routes'
import { API } from 'utils/api'

import { setData } from 'redux/apiData'

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
	const [mounted, setMounted] = useState(false)
	const dispatch = useDispatch()
	const selectedApi = useSelector((s) => s.apiData.selectedApi)
	const data = useSelector((s) => s.apiData.data)
	const ServiceWrapper = useMemo(() => API[selectedApi], [selectedApi])

	const onClick = useCallback(async () => {
		ServiceWrapper.service.get().then((d) => dispatch(setData({ data: d })))
	}, [ServiceWrapper])

	useEffect(() => {
		if (!!data) {
			alert('Hey, I have data. Please, check the browser logs.')
			console.log('API Retrieved data')
			console.log(data)
		}
	}, [data])

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
				<Button
					variant="contained"
					data-cy={ComponentMap.fetchButton}
					color="primary"
					onClick={onClick}
				>
					Fetch
				</Button>
			</div>

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
