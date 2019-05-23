import React from 'react'
import PropTypes from 'prop-types'

import { Grid, withStyles, Typography } from '@material-ui/core'
import ExploreOffIcon from '@material-ui/icons/ExploreOffRounded'

import styles from './styles'
import routes from '../../../utils/routes/routes'
import SceneRoot from '../root'
import { CloseButton } from '../../button'
import LandingIcon from '../../icon/landing'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class NotFoundScene extends React.PureComponent {
	render() {
		const { classes } = this.props

		return (
			<SceneRoot>
				<Grid container className={classes.grid}>
					<LandingIcon color="secondary" Component={ExploreOffIcon} />
					<Typography color="secondary" variant="h2">
						<b>4</b> 0<b>4</b>
					</Typography>
					<Typography color="secondary" variant="button">
						Não encontrado..
					</Typography>
				</Grid>
				<CloseButton route={routes.index} />
			</SceneRoot>
		)
	}
}

NotFoundScene.propTypes = {
	children: PropTypes.node
}

export default withStyles(styles)(NotFoundScene)
