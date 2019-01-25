import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles, Typography } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/BuildRounded'
import ExtensionIcon from '@material-ui/icons/ExtensionRounded'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAltRounded'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoffRounded'

import styles from './styles'
import { translate } from '../../utils/lang'

/**
 * Manages to display a centered info panel
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class BodyContainer extends Component {
	render() {
		const { classes } = this.props

		return (
			<Grid
				container
				className={classes.root}
				alignItems="center"
				justify="center"
				spacing={16}
			>
				<Grid item>
					<BuildIcon className={classes.icon} />
					<Typography
						className={classes.iconCaption}
						variant="caption"
					>
						{translate('label/we-build')}
					</Typography>
				</Grid>

				<Grid item>
					<ArrowRightAltIcon className={classes.inter} />
				</Grid>

				<Grid item>
					<ExtensionIcon className={classes.icon} />
					<Typography
						className={classes.iconCaption}
						variant="caption"
					>
						{translate('label/we-progress')}
					</Typography>
				</Grid>

				<Grid item>
					<ArrowRightAltIcon className={classes.inter} />
				</Grid>

				<Grid item>
					<FlightTakeoffIcon className={classes.icon} />
					<Typography
						className={classes.iconCaption}
						variant="caption"
					>
						{translate('label/we-takeoff')}
					</Typography>
				</Grid>
			</Grid>
		)
	}
}

BodyContainer.propTypes = {
	children: PropTypes.node
}

export default withStyles(styles)(BodyContainer)
