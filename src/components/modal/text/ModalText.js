import React from 'react'
import { useStyles } from '../styles'

/**
 * Renders a modal description box, with free text inside.
 *
 * @param {{ children }} param0 The parameters of the ModalText component
 * @returns A ModalText component with children rendered inside
 */
function ModalText({ children }) {
	const classes = useStyles()

	return <div className={classes.modalContent}>{children}</div>
}

export { ModalText }
