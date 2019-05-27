import { grey } from '@material-ui/core/colors'

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& > *': {
			flex: '0 0 auto',
			marginTop: theme.spacing.unit,
			margin: theme.spacing.unit / 2
		},
		'& > section': {
			marginBottom: theme.spacing.unit * 3
		}
	},
	invertedTextColors: {
		color: '#FFF',
		'& input, & label': {
			color: `#FFF !important`
		},
		'& fieldset': {
			borderColor: `#FFF !important`
		}
		// borderColor: `${theme.palette.secondary.contrastText} !important`
		// borderColor: theme.palette.secondary.contrastText,
	},
	textButton: {
		marginLeft: theme.spacing.unit / 4,
		marginRight: theme.spacing.unit / 4,
		paddingLeft: theme.spacing.unit / 2,
		paddingRight: theme.spacing.unit / 2
	},
	slide: {
		transitionTimingFunction: 'ease-out',
		'&.out': {
			transitionTimingFunction: 'ease-in'
		}
	}
})

export default styles
