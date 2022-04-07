import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
	AppBar,
	Toolbar,
	Typography,
	withStyles,
	IconButton,
} from '@material-ui/core'
import { translate } from '../../utils/lang'
import styles from './styles'
import InstagramIcon from '../icon/instagram'
import routes from '../../utils/routes/routes'
import { compose } from 'recompose'
import Pop from '../util/tooltip'
import ComponentMap from '../../constants/componentMap'

/**
 * Manages to display a header for the app
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @description Added the handleClick fn
 * @author brunoteixeirasilva
 * @version 1.1
 *
 */

function HeaderContainer({ classes, color, history }) {
	const handleClick = async (event, address) => {
		//Will redirect user to the instagram direction
		if (window) window.location.href = address
	}

	const instagramUser = translate('author/instagram-address'),
		instagramAddress = `https://instagr.am/${instagramUser}`,
		labels = {
			instagramButton: translate('label/aria/instagram-link', {
				address: instagramUser,
			}),
		}

	return (
		<AppBar
			className={
				color === 'primary' ? classes.root : classes.rootSecondary
			}
			position="sticky"
		>
			<Toolbar className={classes.flex}>
				<Typography
					onClick={(event) => history.push(routes.index)}
					className={classes.title}
					color="inherit"
					variant="h5"
				>
					{translate('title/app')}
				</Typography>
				<Pop
					placement="bottom-end"
					label={labels.instagramButton}
					children={
						<IconButton
							aria-label={labels.instagramButton}
							data-cy={ComponentMap.instagramButton}
							target="_blank"
							onClick={(event) =>
								handleClick(event, instagramAddress)
							}
							className={classes.button}
						>
							<InstagramIcon />
						</IconButton>
					}
				/>
			</Toolbar>
		</AppBar>
	)
}

/* class HeaderContainer extends React.PureComponent {
	async handleClick(event, address) {
		//Will redirect user to the instagram direction
		if (window) window.location.href = address
	}

	render() {
		const instagramUser = translate('author/instagram-address'),
			instagramAddress = `https://instagr.am/${instagramUser}`,
			labels = {
				instagramButton: translate('label/aria/instagram-link', {
					address: instagramUser,
				}),
			},
			{ classes, color, history } = this.props

		return (
			<AppBar
				className={
					color === 'primary' ? classes.root : classes.rootSecondary
				}
				position="sticky"
			>
				<Toolbar className={classes.flex}>
					<Typography
						onClick={(event) => history.push(routes.index)}
						className={classes.title}
						color="inherit"
						variant="h5"
					>
						{translate('title/app')}
					</Typography>
					<Pop
						placement="bottom-end"
						label={labels.instagramButton}
						children={
							<IconButton
								aria-label={labels.instagramButton}
								target="_blank"
								onClick={(event) =>
									this.handleClick(event, instagramAddress)
								}
								className={classes.button}
							>
								<InstagramIcon />
							</IconButton>
						}
					/>
				</Toolbar>
			</AppBar>
		)
	}
}
 */
HeaderContainer.defaultProps = {
	color: 'primary',
}

HeaderContainer.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary']),
}

export default compose(withRouter, withStyles(styles))(HeaderContainer)
