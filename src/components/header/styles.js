import lightBlue from '@material-ui/core/colors/lightBlue'
import grey from '@material-ui/core/colors/grey'

const styles = (theme) => ({
	root: {
		transition: 'color 800ms, background-color 800ms',
		backgroundColor: '#FFFFFF',
		color: lightBlue[700],
		boxShadow: 'unset'
	},
	rootSecondary: {
		transition: 'color 500ms',
		backgroundColor: 'transparent',
		color: grey[200],
		boxShadow: 'unset'
	},
	flex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		'& > *': {
			flex: '0 0 auto'
		}
	},
	button: {
		marginLeft: 'auto',
		justifySelf: 'flex-end'
	},
	title: {
		marginLeft: theme.spacing(2),
		fontWeight: 500,
		textTransform: 'uppercase',
		cursor: 'pointer'
	}
})

export default styles
