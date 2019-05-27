import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, withWidth } from '@material-ui/core'
import styles from './styles'
import { compose } from 'recompose'
import classNames from 'classnames'
import { isWidthUp } from '@material-ui/core/withWidth'
import { translate } from '../../../utils/lang'

/**
 * Svg icon for instagram
 * from https://materialdesignicons.com/icon/instagram
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {Object} props Required props for the object
 */
const InstagramIcon = (props) => {
	const { classes, color, theme, variant, width } = props

	return (
		<svg
			className={classNames(classes.root, {
				[classes.iconSize48]: isWidthUp('sm', width)
			})}
			// style={{ width: '24px', height: '24px' }}
			viewBox="0 0 24 24"
		>
			<path
				fill={theme.palette[color][variant]}
				d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
			/>
		</svg>
	)
}

InstagramIcon.defaultProps = {
	color: 'primary',
	variant: 'main'
}

InstagramIcon.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary']),
	variant: PropTypes.oneOf(['main', 'light', 'dark']),
	theme: PropTypes.object.isRequired
}

export default compose(
	withWidth(),
	withStyles(styles, { withTheme: true })
)(InstagramIcon)
