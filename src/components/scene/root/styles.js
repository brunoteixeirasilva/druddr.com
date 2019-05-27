const styles = (theme) => ({
	root: {
		transition: 'background-color linear 300ms',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '100%',
		width: '100%',
		// commented out given the screen size oveflow-y
		// height: 'calc(100vh - 56px)',
		height: '100vh',
		marginTop: '-56px',
		[theme.breakpoints.up('sm')]: {
			//height: 'calc(100vh - 64px)'
			marginTop: '-64px'
		}
	}
})

export default styles
