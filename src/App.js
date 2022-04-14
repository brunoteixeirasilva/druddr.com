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
import store from './redux/store'
import { Provider } from 'react-redux'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<div className="App">
						<Router>
							<HeaderContainer color="primary" />
							<BodyContainer />
						</Router>
					</div>
				</MuiThemeProvider>
			</Provider>
		)
	}
}

export default App
