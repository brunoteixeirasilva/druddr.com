import { makeStyles } from '@material-ui/core/styles'

/**
 * Styles for system-wide Modal
 */
function useStyles() {
	return makeStyles((theme) => ({
		root: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		modal: {
			flex: '0 0 auto',
			height: 360,
			width: 480,
			margin: 'auto',
			padding: theme.spacing(3),
		},
		modalTitle: {
			margin: 0,
			padding: 0,
			height: theme.spacing(6),
			fontSize: '1.2em',
		},
		modalContent: {
			height: 'auto',
			minHeight: 150,
			color: 'red',
		},
	}))()
}

export { useStyles }
