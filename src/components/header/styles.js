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
	title: {
		marginLeft: theme.spacing.unit * 2,
		fontWeight: 500,
		textTransform: 'uppercase'
	}
})

export default styles
