import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import BaseButton from '../BaseButton'
import PlayArrowIcon from '@material-ui/icons/PlayArrowRounded'

const PlayButton = (props) => {
	const { classes, route } = props

	return (
		<BaseButton
			buttonColor="primary"
			buttonVariant="round"
			route={route}
			icon={<PlayArrowIcon />}
		/>
	)
}

export default withStyles(styles)(PlayButton)
