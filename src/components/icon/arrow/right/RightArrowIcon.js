import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Grid } from '@material-ui/core'
import styles from './styles'
import classNames from 'classnames'
import { compose } from 'recompose'
import withWidth from '@material-ui/core/withWidth'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAltRounded'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class RightArrowIcon extends React.PureComponent {
	render() {
		const { classes, width, stopRotateOnXs } = this.props

		return (
			<Grid item xs={12} sm={1}>
				<ArrowRightAltIcon
					fontSize="inherit"
					className={classNames(classes.inter, {
						iconSize48: true,
						interIconRotate: !stopRotateOnXs && width === 'xs'
					})}
				/>
			</Grid>
		)
	}
}

RightArrowIcon.defaultProps = {
	stopRotateOnXs: false
}

RightArrowIcon.propTypes = {
	stopRotateOnXs: PropTypes.bool.isRequired
}

export default compose(
	withWidth(),
	withStyles(styles)
)(RightArrowIcon)
