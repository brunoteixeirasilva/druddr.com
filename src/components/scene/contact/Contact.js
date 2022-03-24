import React, { useEffect, useState } from 'react'

import routes from '../../../utils/routes/routes'
import SceneRoot from '../root'
import {
	withStyles,
	InputAdornment,
	IconButton,
	TextField,
	Slide,
	Typography,
	Button,
} from '@material-ui/core'
import LocalPhoneIcon from '@material-ui/icons/LocalPhoneRounded'
import VideocamIcon from '@material-ui/icons/VideocamRounded'
import EmailIcon from '@material-ui/icons/EmailRounded'
import styles from './styles'
import { CloseButton } from '../../button'
import classNames from 'classnames'
import { translate } from '../../../utils/lang'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */

function Contact({ classes, match }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)

		return () => {
			setMounted(false)
		}
	}, [])

	return (
		<SceneRoot color="secondary">
			{/* <Slide
				direction={'up'}
				in={mounted}
				// mountOnEnter
				unmountOnExit
				className={classNames(classes.slide, {
					[classes.out]: !mounted,
				})}
			> */}
			<React.Fragment>
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
						value={translate('author/skype-address')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label={translate(
											'author/skype-call'
										)}
										onClick={(event) =>
											(window.location.href = translate(
												'author/skype-address-href'
											))
										}
									>
										<VideocamIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.invertedTextColors}
						disabled
						variant="outlined"
						label="Tel"
						id="tel"
						aria-label="Telefone"
						value={translate('author/phone-number')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label={translate(
											'author/phone-number-call'
										)}
										onClick={(event) =>
											(window.location.href = translate(
												'author/phone-number-href'
											))
										}
									>
										<LocalPhoneIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.invertedTextColors}
						disabled
						variant="outlined"
						label="E-mail"
						id="email"
						aria-label="email"
						value={translate('author/e-mail')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label={translate(
											'author/e-mail-call'
										)}
										onClick={(event) =>
											(window.location.href =
												translate('author/e-mail-href'))
										}
									>
										<EmailIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Typography
						className={classes.invertedTextColors}
						component="section"
						variant="body1"
					>
						<b>Powered</b> by
						<Button
							aria-label={translate('title/author')}
							className={classNames(
								classes.textButton,
								classes.invertedTextColors
							)}
							variant="text"
							component="b"
							onClick={
								(event) => false
								// (window.location.href =
								// 	'https://fb.me/bruno.teixeiradasilva')
							}
						>
							{translate('title/author')}
						</Button>
					</Typography>
				</div>
			</React.Fragment>
			{/* </Slide> */}
			<CloseButton
				buttonColor="primary"
				onClick={async (event, history) => {
					setMounted(false).then((s) => {
						return history.push(routes.index)
					})

					return false
				}}
			/>
		</SceneRoot>
	)
}

/* class ContactScene extends React.PureComponent {
	state = {
		mounted: false,
	}

	async setMounted(mounted = false) {
		const self = this

		self.setState({ mounted: mounted })

		return Promise.resolve(self)
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
			<SceneRoot color="secondary">
				<Slide
					direction={'up'}
					in={self.state.mounted}
					// mountOnEnter
					unmountOnExit
					className={classNames(classes.slide, {
						[classes.out]: !self.state.mounted,
					})}
				>
					<React.Fragment>
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
								value={translate('author/skype-address')}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label={translate(
													'author/skype-call'
												)}
												onClick={(event) =>
													(window.location.href =
														translate(
															'author/skype-address-href'
														))
												}
											>
												<VideocamIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<TextField
								className={classes.invertedTextColors}
								disabled
								variant="outlined"
								label="Tel"
								id="tel"
								aria-label="Telefone"
								value={translate('author/phone-number')}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label={translate(
													'author/phone-number-call'
												)}
												onClick={(event) =>
													(window.location.href =
														translate(
															'author/phone-number-href'
														))
												}
											>
												<LocalPhoneIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<TextField
								className={classes.invertedTextColors}
								disabled
								variant="outlined"
								label="E-mail"
								id="email"
								aria-label="email"
								value={translate('author/e-mail')}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label={translate(
													'author/e-mail-call'
												)}
												onClick={(event) =>
													(window.location.href =
														translate(
															'author/e-mail-href'
														))
												}
											>
												<EmailIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<Typography
								className={classes.invertedTextColors}
								component="section"
								variant="body1"
							>
								<b>Powered</b> by
								<Button
									aria-label={translate('title/author')}
									className={classNames(
										classes.textButton,
										classes.invertedTextColors
									)}
									variant="text"
									component="b"
									onClick={
										(event) => false
										// (window.location.href =
										// 	'https://fb.me/bruno.teixeiradasilva')
									}
								>
									{translate('title/author')}
								</Button>
							</Typography>
						</div>
					</React.Fragment>
				</Slide>
				<CloseButton
					buttonColor="primary"
					onClick={async (event, history) => {
						self.setMounted(false).then((s) => {
							return history.push(routes.index)
						})

						return false
					}}
				/>
			</SceneRoot>
		)
	}
} */

Contact.propTypes = {}

export default withStyles(styles)(Contact)
