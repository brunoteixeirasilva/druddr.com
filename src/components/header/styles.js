import lightBlue from '@material-ui/core/colors/lightBlue'

const styles = (theme) => ({
	root: {
		backgroundColor: 'transparent',
		color: lightBlue[700],
		boxShadow: 'unset'
		// backgroundColor: lightBlue[400]
	},
	title: {
		marginLeft: theme.spacing.unit * 2,
		fontWeight: 500,
		textTransform: 'uppercase'
	}
})

export default styles
