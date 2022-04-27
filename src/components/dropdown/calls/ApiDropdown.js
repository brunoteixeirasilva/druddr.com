import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import InputLabel from '@material-ui/core/InputLabel'
import { useStyles } from '../language/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { translate } from 'utils/lang'
import { API } from 'utils/api'

import { changeApi } from 'redux/apiData'

/**
 * API Dropdown
 *
 * @description Created the component
 * @author lologrignola
 * @version 1.0
 *
 * @param {Object} props
 */

function ApiDropdown() {
	const dispatch = useDispatch()
	const apiDataState = useSelector((s) => s.apiData)
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">{}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={apiDataState.selectedApi}
					onChange={(e) => {
						dispatch(changeApi(e.target.value))
					}}
				>
					{Object.keys(API)
						.filter((k) => k !== 'default')
						.map((APIKey) => (
							<MenuItem
								key={APIKey}
								value={APIKey}
								// selected={selected === APIKey}
							>
								{translate(`label/${API[APIKey].key}`)}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}

export default ApiDropdown
