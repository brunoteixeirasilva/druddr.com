import React, { useState, useCallback } from 'react'

// Components' imports
import InputLabel from '@material-ui/core/InputLabel'
import { useStyles } from './styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

// Languages imports
import { translate } from 'utils/lang'
import { useDispatch, useSelector } from 'react-redux'

import { changeLanguage, setReload } from 'redux/configuration'

const pt_br = require('i18n/pt_br.json')
const en_uk = require('i18n/en_uk.json')

// import en_uk from '@i18n/en_uk'

const languages = {
	en_uk: en_uk,
	pt_br: pt_br,
}

/* const defaultLanguage = 'pt_br' */

/**
 * Generates a Language selection dropdown for the application.
 *
 * @description Creating the component
 * @author brunoteixeirasilva, lologrignola, andresriveiro
 * @version 1.0
 */
function LanguageDropdown() {
	const selectedLanguage = useSelector(
		(state) => state.configuration.language
	)
	const dispatch = useDispatch()
	const classes = useStyles(),
		/* [currentLanguage, setCurrentLanguage] = useState(defaultLanguage), */
		handleChange = useCallback((event) => {
			dispatch(changeLanguage(event.target.value))
		}, [])

	return (
		<div className={classes.container}>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-simple-select-label">{}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={selectedLanguage}
					onChange={handleChange}
				>
					{Object.keys(languages).map((lang) => (
						<MenuItem key={lang} value={lang}>
							{translate(`label/language/${lang}`)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default LanguageDropdown
