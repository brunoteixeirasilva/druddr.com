const styles = (theme) => ({
	rootBottomButton: {
		position: 'fixed',
		bottom: theme.spacing(1),
		right: theme.spacing(1),
		background: theme.palette.primary.dark,
		color: theme.palette.primary.light,
		'&:hover': {
			background: theme.palette.primary.light,
			color: theme.palette.primary.dark,
		},
		'& > span': {
			fontSize: 48,
			'& > svg': {
				fontSize: 'inherit',
			},
		},
	},
	rootTopButton: {
		position: 'fixed',
		top: theme.spacing(10),
		right: theme.spacing(1),
		background: theme.palette.secondary.dark,
		color: theme.palette.secondary.light,
		'&:hover': {
			background: theme.palette.secondary.light,
			color: theme.palette.secondary.dark,
		},
		'& > span': {
			fontSize: 48,
			'& > svg': {
				fontSize: 'inherit',
			},
		},
	},
	rootBottomLeftButton: {
		position: 'fixed',
		bottom: theme.spacing(1),
		left: theme.spacing(1),
		background: theme.palette.primary.dark,
		color: theme.palette.primary.light,
		'&:hover': {
			background: theme.palette.primary.light,
			color: theme.palette.primary.dark,
		},
		'& > span': {
			fontSize: 48,
			'& > svg': {
				fontSize: 'inherit',
			},
		},
	},
})

export default styles
