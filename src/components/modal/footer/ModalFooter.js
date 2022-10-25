import React, { useCallback, useMemo } from 'react'

import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		marginTop: 'auto',
		flex: '0 0 auto',
		alignSelf: 'flex-end',
	},
	button: {
		marginLeft: '8px',
	},
}))

/**
 * Function component for rendering modal footer
 * that supports controls, as well as controllable visibility.
 */
function ModalFooter({ controls, name, hide = false }) {
	const classes = useStyles()
	const onClick = useCallback(() => {
		throw Error('Not implemented')
	}, [])

	const defaultText = useMemo(() => 'Text not defined', [])

	// Controls not present (null-ish)
	//	OR controls is not an array
	//  OR component should be hidden
	// Stop, component depends on controls to render.
	if (!controls || !Array.isArray(controls) || hide) return null

	return (
		<div name={name} className={classes.footerContainer}>
			{controls.map((control) => (
				<Button
					className={classes.button}
					onClick={control.onClick ? control.onClick : onClick}
					color={control.color ? control.color : 'default'}
					variant={control.variant ? control.variant : 'contained'}
				>
					{control.text ? control.text : defaultText}
				</Button>
			))}
		</div>
	)
}

ModalFooter.propTypes = {
	controls: PropTypes.arrayOf(PropTypes.object),
	name: PropTypes.string,
	hide: PropTypes.bool,
}

export default ModalFooter
