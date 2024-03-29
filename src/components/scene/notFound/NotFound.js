import React from 'react'
import PropTypes from 'prop-types'

import { Grid, withStyles, Typography, Slide } from '@material-ui/core'
import ExploreOffIcon from '@material-ui/icons/ExploreOffRounded'

import styles from './styles'
import { routes } from 'utils/routes'
import SceneRoot from '../root'
import { CloseButton } from '../../button'
import LandingIcon from '../../icon/landing'
import { translate } from '../../../utils/lang'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class NotFoundScene extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<Slide direction="right" in={true}>
				<SceneRoot>
					<Grid container className={classes.grid}>
						<LandingIcon
							label="label/wrong-way"
							hideLabel
							color="secondary"
							Component={ExploreOffIcon}
						/>
						<Typography color="secondary" variant="h2">
							<b>4</b> 0<b>4</b>
						</Typography>
						<Typography color="secondary" variant="button">
							{translate('label/not-found')}..
						</Typography>
					</Grid>
					<CloseButton dataCy="close-button" route={routes.index} />
				</SceneRoot>
			</Slide>
		)
	}
}

NotFoundScene.propTypes = {
	children: PropTypes.node,
}

export default withStyles(styles)(NotFoundScene)
