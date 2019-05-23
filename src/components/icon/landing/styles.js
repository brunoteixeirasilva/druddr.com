import { grey, lightBlue } from '@material-ui/core/colors'
import { getIconSizesObject } from '../../util/icon'

const styles = (theme) => ({
	outline: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& > *': {
			flex: '0 0 auto',
			marginBottom: theme.spacing.unit / 2,
			marginTop: theme.spacing.unit / 2
		}
	},
	icon: {
		'-webkit-transition':
			'color ease-in 300ms, transform ease-out 200ms, font-size ease 300ms',
		transition:
			'color ease-in 300ms, transform ease-out 200ms, font-size ease 300ms',
		transform: 'rotate(0deg)',
		color: grey[800],
		'&:hover': {
			'-webkit-transition':
				'color ease-in 300ms, transform ease-out 200ms, font-size ease 300ms',
			transition:
				'color ease-in 300ms, transform ease-out 200ms, font-size ease 300ms',
			transform: 'rotate(-15deg)',
			color: lightBlue[400]
		},
		...getIconSizesObject(true)
	},
	iconCaption: {
		textAlign: 'center',
		fontSize: 16,
		color: grey[400],
		textTransform: 'uppercase'
	}
})

export default styles
