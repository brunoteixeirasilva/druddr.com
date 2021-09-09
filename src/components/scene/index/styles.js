const styles = (theme) => ({
	grid: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'&.wide': {
			flexDirection: 'row',
			'& > *': {
				marginLeft: theme.spacing(1),
				marginRight: theme.spacing(1)
			}
		},
		'& > *': {
			flex: '0 0 auto',
			margin: theme.spacing(0.5)
		}
	},
	slide: {
		transitionTimingFunction: 'ease-out',
		'&.out': {
			transitionTimingFunction: 'ease-in'
		}
	}
})

export default styles
