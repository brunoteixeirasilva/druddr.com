const styles = (theme) => ({
	rootBottomButton: {
		position: 'fixed',
		bottom: theme.spacing(1),
		right: theme.spacing(1),
		background: theme.palette.primary.dark,
		color: theme.palette.primary.light,
		'&:hover': {
			background: theme.palette.primary.light,
			color: theme.palette.primary.dark
		},
		'& > span': {
			fontSize: 48,
			'& > svg': {
				fontSize: 'inherit'
			}
		}
	}
})

export default styles
