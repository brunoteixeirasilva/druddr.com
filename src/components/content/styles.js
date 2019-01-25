import { lightBlue, grey } from '@material-ui/core/colors'

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		width: '100vw',
		height: 'calc(100vh - 56px)'
	},
	icon: {
		fontSize: 128,
		'-webkit-transition': 'color ease-in 300ms, transform ease-out 200ms',
		transition: 'color ease-in 300ms, transform ease-out 200ms',
		transform: 'rotate(0deg)',
		color: grey[800],
		'&:hover': {
			'-webkit-transition':
				'color ease-in 300ms, transform ease-out 200ms',
			transition: 'color ease-in 300ms, transform ease-out 200ms',
			transform: 'rotate(-15deg)',
			color: lightBlue[400]
		}
	},
	iconCaption: {
		fontSize: 16,
		color: grey[400],
		textTransform: 'uppercase'
	},
	inter: {
		fontSize: 48,
		color: grey[400]
	}
})

export default styles
