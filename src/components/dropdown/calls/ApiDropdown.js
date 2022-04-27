import React, { useState } from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import { useStyles } from '../language/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { translate } from '../../../../src/utils/lang/translate'

const calls = ['movies', 'tokens', 'users', 'comments', 'pets']

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
	const [selected, setSelected] = useState('movies')

	const classes = useStyles()
	return (
		<div className={classes.container}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">{}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={selected}
					onChange={(e) => {
						setSelected(e.target.value)
					}}
				>
					{calls.map((call) => (
						<MenuItem key={call} value={call}>
							{translate(`label/${call}`)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default ApiDropdown
