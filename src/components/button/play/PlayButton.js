import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import BaseButton from '../BaseButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrowRounded'
import { translate } from '../../../utils/lang'
import Pop from '../../util/tooltip'

/**
 * Displays a bottom FAB button for "next" steps or "start"
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {Object} props
 */
const PlayButton = (props) => {
	const { classes, route } = props,
		label = translate('label/next')

	return (
		<Pop aria-label={label} label={label} placement="top-end">
			<BaseButton
				buttonColor="primary"
				buttonVariant="round"
				route={route}
				icon={<PlayArrowIcon />}
			/>
		</Pop>
	)
}

export default withStyles(styles)(PlayButton)
