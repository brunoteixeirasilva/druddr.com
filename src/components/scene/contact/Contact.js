import React from 'react'
import routes from '../../../utils/routes/routes'
import SceneRoot from '../root'
import {
	withStyles,
	InputAdornment,
	IconButton,
	TextField,
	Slide,
	Typography
} from '@material-ui/core'
import LocalPhoneIcon from '@material-ui/icons/LocalPhoneRounded'
import VideocamIcon from '@material-ui/icons/VideocamRounded'
import EmailIcon from '@material-ui/icons/EmailRounded'
import styles from './styles'
import { CloseButton } from '../../button'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class ContactScene extends React.PureComponent {
	state = {
		mounted: false
	}

	setMounted(mounted = false) {
		const self = this

		self.setState({ mounted: mounted })
	}

	componentDidMount() {
		this.setMounted(true)
	}

	componentWillUnmount() {
		this.setMounted(false)
	}

	render() {
		const self = this
		const { classes, match } = self.props

		return (
			<Slide
				direction={!self.state.mounted ? 'down' : 'up'}
				in={self.state.mounted}
				// mountOnEnter
				unmountOnExit
			>
				<SceneRoot color="secondary">
					<div className={classes.root}>
						<Typography
							className={classes.invertedTextColors}
							component="section"
							variant="h2"
						>
							<b>React</b> Developer
						</Typography>
						<Typography
							className={classes.invertedTextColors}
							component="section"
							variant="body1"
						>
							JavaScript(ing) since <b>2008</b>
						</Typography>
						<TextField
							className={classes.invertedTextColors}
							disabled
							variant="outlined"
							label="Skype"
							id="skype"
							aria-label="skype"
							value="bruno.teixeira.silva"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="Skype me"
											onClick={(event) =>
												(window.location.href =
													'skype:bruno.teixeira.silva?call')
											}
										>
											<VideocamIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
						<TextField
							className={classes.invertedTextColors}
							disabled
							variant="outlined"
							label="Tel"
							id="tel"
							aria-label="Telefone"
							value="+55 51 99338-1562"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="Me ligue"
											onClick={(event) =>
												(window.location.href =
													'tel:+5551993381562')
											}
										>
											<LocalPhoneIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
						<TextField
							className={classes.invertedTextColors}
							disabled
							variant="outlined"
							label="E-mail"
							id="email"
							aria-label="email"
							value="bruno@druddr.com"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="Me envie um e-mail"
											onClick={(event) =>
												(window.location.href =
													'email:bruno@druddr.com')
											}
										>
											<EmailIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</div>
					<CloseButton
						buttonColor="primary"
						onClick={(event) => {
							self.setMounted(false)

							// return history.push(routes.index)
						}}
						route={routes.index}
					/>
				</SceneRoot>
			</Slide>
		)
	}
}

ContactScene.propTypes = {}

export default withStyles(styles)(ContactScene)
