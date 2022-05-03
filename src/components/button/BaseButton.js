import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Fab, withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import styles from './styles'

/**
 * Standardizes system-wide buttons (FAB)
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class BaseButton extends React.Component {
	render() {
		const {
			classes,
			buttonColor,
			buttonVariant,
			history,
			onClick,
			route,
			mode,
			dataCy,
		} = this.props
		const children = this.props.icon || this.props.children
		// ! will be used for counting clicks on-a-run
		// const buttonData = useState(null)

		return (
			<Fab
				data-cy={dataCy || new Date().getMilliseconds()}
				color={buttonColor}
				className={
					mode === 'left'
						? classes.rootBottomLeftButton
						: mode === 'top'
						? classes.rootTopButton
						: classes.rootBottomButton
				}
				variant={buttonVariant}
				onClick={(event) => {
					if (!!onClick && typeof onClick === 'function')
						onClick(event, history)
					return !!route && history.push(route)
				}}
				// ref={ref}
				children={children}
			/>
		)
	}
}

BaseButton.defaultProps = {
	buttonVariant: 'round',
	buttonColor: 'primary',
	mode: 'bottom',
}

BaseButton.propTypes = {
	classes: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	children: PropTypes.node,
	route: PropTypes.string,
	onClick: PropTypes.func,
	mode: PropTypes.string,
}

export default compose(withRouter, withStyles(styles))(BaseButton)
