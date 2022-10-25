import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

function ModalFooter({ controls, name, hide = false }) {
	const onClick = useCallback(() => {
		throw Error('Not implemented')
	}, [])

	const defaultText = useMemo(() => 'Text not defined', [])
	// const { controls } = props

	// Controls not present (null-ish)
	//	OR controls is not an array
	//  OR component should be hidden
	// Stop, component depends on controls to render.
	if (!controls || !Array.isArray(controls) || hide) return null

	return (
		<div name={name}>
			{controls.map((control) => (
				<Button onClick={control.onClick ? control.onClick : onClick}>
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
