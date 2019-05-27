import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, withStyles, Chip } from '@material-ui/core'
import { translate } from '../../../utils/lang'
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth'
import classNames from 'classnames'
import styles from './styles'
import { compose } from 'recompose'

/**
 * Simplifies displaying a default landing page icon
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class LandingIcon extends React.PureComponent {
	render() {
		const {
			arialabel,
			classes,
			color,
			Component,
			label,
			width,
			hideLabel
		} = this.props
		const translatedLabel = translate(label || arialabel || 'label/empty')
		const iconProps = {
			label: translatedLabel,
			arialabel: translatedLabel,
			className: classNames(classes.icon, {
				colorPrimary: !!color && color === 'primary',
				colorSecondary: !!color && color === 'secondary',
				iconSize56: isWidthDown('sm', width, false),
				iconSize128: isWidthUp('sm', width, true)
			})
		}

		return (
			<Grid item xs={12} sm={3} className={classes.outline}>
				{Component instanceof React.Component ? (
					React.cloneElement(Component, iconProps)
				) : (
					<Component {...iconProps} />
				)}
				{!hideLabel && !!translatedLabel && (
					<Chip
						arialabel={translatedLabel}
						label={translatedLabel}
						className={classes.iconCaption}
						variant="outlined"
					/>
				)}
			</Grid>
		)
	}
}

LandingIcon.defaultProps = {
	hideLabel: false
}

LandingIcon.propTypes = {
	color: PropTypes.oneOf([null, 'primary', 'secondary']),
	Component: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.func
	]),
	hideLabel: PropTypes.bool,
	label: PropTypes.string
}

export default compose(
	withWidth(),
	withStyles(styles)
)(LandingIcon)
