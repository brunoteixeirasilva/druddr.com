import { grey } from '@material-ui/core/colors'

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& > *': {
			flex: '0 0 auto',
			marginTop: theme.spacing(1),
			margin: theme.spacing(0.5)
		},
		'& > section': {
			marginBottom: theme.spacing(3)
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
		marginLeft: theme.spacing(0.25),
		marginRight: theme.spacing(0.25),
		paddingLeft: theme.spacing(0.5),
		paddingRight: theme.spacing(0.5)
	},
	slide: {
		transitionTimingFunction: 'ease-out',
		'&.out': {
			transitionTimingFunction: 'ease-in'
		}
	}
})

export default styles
