import { getIconSizesObject } from '../../util/icon'

const styles = (theme) => ({
	root: {
		flex: '1',
		alignSelf: 'flex-end',
		justifySelf: 'flex-end',
		fontSize: 16,
		width: 24,
		height: 24
	},
	...getIconSizesObject()
})

export default styles
