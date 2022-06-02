import React, { useEffect, useState, useMemo, useCallback } from 'react'
import Button from '@material-ui/core/Button'

import { useSelector, useDispatch } from 'react-redux'

import ApiDropdown from 'components/dropdown/calls/ApiDropdown'
import ComponentMap from 'constants/componentMap'
import { CloseButton } from '../../button'
import { routes } from 'utils/routes'
import { BackBone } from 'utils/api'

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
	// const apiService = useMemo(() => BackBone.api.service, [])

	const apiCall = useCallback(async () => {
		BackBone.api.service().requestData(selectedApi)
	}, [selectedApi])

	useEffect(() => {
		if (!!data) {
			BackBone.messageModal.service.info(
				'Hey, I have data. Please, check the browser logs.'
			)
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
					onClick={apiCall}
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
