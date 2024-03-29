import React from 'react'
import PropTypes from 'prop-types'
import { Modal as MaterialUiModal, Backdrop, Paper } from '@material-ui/core'
import { useStyles } from './styles'
import ModalTitle from './title/ModalTitle'

/**
 * Modal for cross-system usage
 *
 * @param {{ children, open, onClose, title, description }} props
 * @returns A Modal component (currently using Material UI)
 */
function Modal(props) {
	const { children, open, onClose, title, description } = props,
		classes = useStyles()

	return (
		<MaterialUiModal
			open={open}
			onClose={onClose}
			aria-labelledby={title}
			aria-describedby={description}
			BackdropComponent={Backdrop}
			className={classes.root}
		>
			<Paper className={classes.modal} elevation={2}>
				<ModalTitle className={classes.ModalTitle} text={title} />
				<div className={classes.modalContent}>{children}</div>
			</Paper>
		</MaterialUiModal>
	)
}

Modal.defaultProps = {
	description: null,
}

Modal.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func,
	open: PropTypes.bool,
	title: PropTypes.string,
	description: PropTypes.any,
}

export { Modal }
