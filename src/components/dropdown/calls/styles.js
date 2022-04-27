import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	formControl: {
		flex: '0 0 auto',
		margin: theme.spacing(1),
		minWidth: 120,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& input': {
			flex: '0 0 auto',
		},
	},
	container: {
		marginLeft: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

export { useStyles }
