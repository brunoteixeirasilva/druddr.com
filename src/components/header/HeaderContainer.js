import React from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { translate } from '../../utils/lang'
import styles from './styles'

/**
 * Manages to display a header for the app
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class HeaderContainer extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<AppBar className={classes.root} position="sticky">
				<Toolbar>
					{/* <IconButton
						color="inherit"
						aria-label={translate('label/open-menu')}
					>
						<MenuIcon />
					</IconButton> */}
					<Typography
						className={classes.title}
						color="inherit"
						variant="headline"
					>
						{translate('title/app')}
					</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles)(HeaderContainer)
