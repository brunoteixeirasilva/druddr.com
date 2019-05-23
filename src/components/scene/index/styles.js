const styles = (theme) => ({
	grid: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'&.wide': {
			flexDirection: 'row',
			'& > *': {
				marginLeft: theme.spacing.unit,
				marginRight: theme.spacing.unit
			}
		},
		'& > *': {
			flex: '0 0 auto',
			margin: theme.spacing.unit / 2
		}
	}
})

export default styles
