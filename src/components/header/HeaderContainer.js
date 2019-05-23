import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'
import { translate } from '../../utils/lang'
import styles from './styles'

/**
 * Manages to display a header for the app
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class HeaderContainer extends React.PureComponent {
	render() {
		const { classes, color } = this.props

		return (
			<AppBar
				className={
					color === 'primary' ? classes.root : classes.rootSecondary
				}
				position="sticky"
			>
				<Toolbar>
					<Typography
						className={classes.title}
						color="inherit"
						variant="h5"
					>
						{translate('title/app')}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

HeaderContainer.defaultProps = {
	color: 'primary'
}

HeaderContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary'])
}

export default withStyles(styles)(HeaderContainer)
