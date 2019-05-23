import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/blue'
import brown from '@material-ui/core/colors/brown'

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: brown
	},
	typography: {
		useNextVariants: true
	}
})

export default theme
