import React, { useMemo } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// Service imports
import { MessageModalService } from 'services/MessageModalService'

// Utilities import
import { translate } from 'utils/lang'

export const MessageType = {
	info: 'info',
	error: 'error',
	success: 'success',
	warning: 'warning',
}

export function MessageModal({
	text = 'empty-text',
	open = false,
	type = MessageType.info,
}) {
	const timestamp = useMemo(() => new Date().getMilliseconds(), [text])
	const titleUniqueId = useMemo(
		() => `alert-dialog-title-${timestamp}`,
		[timestamp]
	)
	const textUniqueId = useMemo(
		() => `alert-dialog-text-${timestamp}`,
		[timestamp]
	)

	const resolvedTitle = useMemo(() => {
		switch (type) {
			case MessageType.success: {
				return translate('messageType/title/success')
			}
			case MessageType.error: {
				return translate('messageType/title/error')
			}
			case MessageType.warning: {
				return translate('messageType/title/warning')
			}
			case MessageType.info:
			default:
				return translate('messageType/title/info')
		}
	}, [type])

	async function onClose() {
		new MessageModalService().close()
		// TODO: Dispatch a state change to force MessageModel to close
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby={titleUniqueId}
			aria-describedby={textUniqueId}
		>
			<DialogTitle id={titleUniqueId}>{resolvedTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText id={textUniqueId}>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				{/* <Button onClick={onClose} color="primary">
					Disagree
				</Button> */}
				<Button onClick={onClose} color="primary" autoFocus>
					{translate('button/close')}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
