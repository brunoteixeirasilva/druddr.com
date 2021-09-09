import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Fade } from '@material-ui/core'

/**
 * Standardised tooltip utility
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */
class Pop extends React.PureComponent {
	render() {
		const { children, label, placement } = this.props

		return (
			<Tooltip
				{...this.props}
				TransitionComponent={Fade}
				placement={placement}
				title={label}
				children={React.forwardRef((props, ref) =>
					React.cloneElement(children, { ref: ref })
				)}
			/>
		)
	}
}

Pop.defaultProps = {
	label: '',
	placement: 'bottom-start'
}

Pop.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
	placement: PropTypes.oneOf([
		'top-end',
		'top-start',
		'bottom-end',
		'bottom-start'
	])
}

export default Pop
