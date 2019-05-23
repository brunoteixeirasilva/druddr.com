import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import styles from './styles'

/**
 * Should wrap any system-wide-page
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class SceneRoot extends React.PureComponent {
	render() {
		const { classes, children, color, theme } = this.props

		return (
			<div
				style={{
					backgroundColor:
						color !== 'none'
							? theme.palette[color].main
							: 'transparent'
				}}
				className={classes.root}
			>
				{children}
			</div>
		)
	}
}

SceneRoot.defaultProps = {
	color: 'none',
	children: 'no-children-passed-on'
}

SceneRoot.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.oneOf(['none', 'primary', 'secondary'])
}

export default withStyles(styles, { withTheme: true })(SceneRoot)
