import React from 'react'
import PropTypes from 'prop-types'
// import styles from './styles'
import BaseButton from '../BaseButton'
import HelpIcon from '@material-ui/icons/Help'
import { translate } from 'utils/lang'
import Pop from 'components/util/tooltip'

/**
 * Displays a bottom FAB button for "Help" section
 *
 * @description Created the component
 * @author brunoteixeirasilva, NicoGallardo2, andresriveiro, lologrignola
 * @version 1.0
 *
 * @param {Object} props
 */

function HelpButton(props) {
	const { onClick } = props,
		label = translate('label/help')

	return (
		<Pop aria-label={label} label={label} placement="top-end">
			<BaseButton
				buttonColor="primary"
				buttonVariant="round"
				onClick={onClick}
				icon={<HelpIcon />}
				mode="top"
			/>
		</Pop>
	)
}

HelpButton.propTypes = {
	onClick: PropTypes.func,
}

export { HelpButton }
