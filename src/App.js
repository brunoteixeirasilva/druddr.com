import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { withRouter } from 'react-router-dom'
import HeaderContainer from './components/header'
import { BrowserRouter as Router } from 'react-router-dom'
import BodyContainer from './components/content'
import theme from './components/util/theme'
import { MuiThemeProvider } from '@material-ui/core'
import routes from './utils/routes/routes'

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<HeaderContainer color="primary" />
						<BodyContainer />
					</Router>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
