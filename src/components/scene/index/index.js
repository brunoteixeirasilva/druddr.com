import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import { Grid, withStyles, Fab, Slide } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/BuildRounded'
import ExtensionIcon from '@material-ui/icons/ExtensionRounded'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoffRounded'

import { withRouter } from 'react-router-dom'
import styles from './styles'
import LandingIcon from '../../icon/landing'
import RightArrowIcon from '../../icon/arrow/right'
import { compose } from 'recompose'
import routes from '../../../utils/routes/routes'
import SceneRoot from '../root'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import PlayButton from '../../button/play/PlayButton'
import { HelpButton } from 'components/button/help/HelpButton'
import { Modal } from 'components/modal/Modal'
import ComponentMap from 'constants/componentMap'
import ApiButton from '../../button/api/ApiButton'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class IndexScene extends React.PureComponent {
	state = {
		mounted: false,
		helpOpen: false,
	}

	componentDidMount() {
		this.setMounted(true)
	}

	componentWillUnmount() {
		this.setMounted(false)
	}

	async setMounted(mounted) {
		this.setState({ mounted })
	}

	openModal() {
		this.setState({ helpOpen: true })
	}

	closeModal() {
		this.setState({ helpOpen: false })
	}

	render() {
		const { classes, history, width } = this.props

		return (
			<Slide
				direction="down"
				in={this.state.mounted}
				className={classNames(classes.slide, {
					[classes.out]: !this.state.mounted,
				})}
			>
				<SceneRoot>
					<Grid
						container
						className={classNames(classes.grid, {
							wide: isWidthUp('sm', width, true),
						})}
					>
						<LandingIcon
							Component={BuildIcon}
							label={'label/we-build'}
						/>
						<RightArrowIcon />
						<LandingIcon
							Component={ExtensionIcon}
							label={'label/we-progress'}
						/>
						<RightArrowIcon />
						<LandingIcon
							Component={FlightTakeoffIcon}
							label={'label/we-takeoff'}
						/>
					</Grid>
					<HelpButton onClick={this.openModal.bind(this)} />
					<Modal
						open={this.state.helpOpen}
						onClose={this.closeModal.bind(this)}
						title={'Test Title'}
					>
						{'Help text, work in progress here'}
					</Modal>
					<PlayButton
						dataCy={ComponentMap.playButton}
						route={routes.contact}
					/>
					<ApiButton
						dataCy={ComponentMap.apiButton}
						route={routes.api}
					/>
				</SceneRoot>
			</Slide>
		)
	}
}

IndexScene.propTypes = {
	children: PropTypes.node,
}

export default compose(withRouter, withWidth(), withStyles(styles))(IndexScene)
