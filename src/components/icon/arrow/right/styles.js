import { grey } from '@material-ui/core/colors'
import { getIconSizesObject } from '../../../util/icon'

const styles = (theme) => ({
	inter: {
		color: grey[400],
		transition: 'transform 300ms',
		'&.interIconRotate': {
			transform: 'rotate(90deg)'
		},
		...getIconSizesObject(true)
	}
})

export default styles
