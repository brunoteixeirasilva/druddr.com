import React from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import BaseButton from '../BaseButton'
import ClearIcon from '@material-ui/icons/ClearRounded'
import Pop from '../../util/tooltip'
import { translate } from '../../../utils/lang'

/**
 * Standardizes FAB close-button
 *
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 *
 * @param {Object} props
 */
class CloseButton extends React.Component {
	render() {
		const { classes, buttonColor, onClick, route } = this.props,
			label = translate('label/close')

		return (
			<Pop
				aria-label={label}
				label={label}
				data-cy="close-button"
				placement="top-end"
				children={
					<BaseButton
						// ref={ref}
						buttonColor={buttonColor}
						buttonVariant="round"
						route={route}
						onClick={onClick}
						icon={<ClearIcon />}
					/>
				}
			/>
		)
	}
}

CloseButton.defaultProps = {
	buttonColor: 'secondary',
}

export default withStyles(styles)(CloseButton)
