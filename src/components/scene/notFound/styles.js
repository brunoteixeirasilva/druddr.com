const styles = (theme) => ({
	grid: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& > *': {
			flex: '0 0 auto',
			margin: theme.spacing(0.5)
		}
	}
})

export default styles
