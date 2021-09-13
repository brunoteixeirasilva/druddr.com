import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Fade } from '@material-ui/core'

/**
 * Standardised tooltip utility
 *
 * @description Created the (class) component
 * @author brunoteixeirasilva
 * @version 1.0.0
 *
 * @description Migrated to function component
 * @author brunoteixeirasilva
 * @version 1.0.1
 */
const Pop = (props) => {
	const { children, label, placement } = props

	return (
		<Tooltip
			{...props}
			TransitionComponent={Fade}
			placement={placement}
			title={label}
			children={children}
			// children={React.forwardRef((_, ref) =>
			// 	React.cloneElement(children, { ref: ref })
			// )}
		/>
	)
}

Pop.defaultProps = {
	label: '',
	placement: 'bottom-start',
}

Pop.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
	placement: PropTypes.oneOf([
		'top-end',
		'top-start',
		'bottom-end',
		'bottom-start',
	]),
}

export default Pop
