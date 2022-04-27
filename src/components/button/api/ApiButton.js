import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import BaseButton from '../BaseButton'
import AppsIcon from '@material-ui/icons/Apps'
import { translate } from '../../../utils/lang'
import Pop from '../../util/tooltip'

/**
 * Button to go to API page
 *
 * @description Created the component
 * @author lologrignola
 * @version 1.0
 *
 * @param {Object} props
 */
const ApiButton = (props) => {
	const { classes, route, dataCy } = props,
		label = translate('label/api')

	return (
		<Pop aria-label={label} label={label} placement="top-end">
			<BaseButton
				dataCy={dataCy}
				buttonColor="primary"
				buttonVariant="round"
				route={route}
				mode="left"
				icon={<AppsIcon />}
			/>
		</Pop>
	)
}

export default withStyles(styles)(ApiButton)
