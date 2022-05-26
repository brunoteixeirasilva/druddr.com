import React, { useEffect, useMemo } from 'react'
// import logo from './logo.svg'
import './App.css'
import { withRouter } from 'react-router-dom'
import HeaderContainer from './components/header'
import { BrowserRouter as Router } from 'react-router-dom'
import BodyContainer from './components/content'
import { MessageModal } from './components/modal/message'
import theme from './components/util/theme'
import { MuiThemeProvider } from '@material-ui/core'
import routes from './utils/routes/routes'
import store from './redux/store'
import { Provider, useSelector } from 'react-redux'

// Service imports
import { MessageModalService } from 'services/MessageModalService'

// Selector imports
import { selectMessageModalState } from 'redux/messageModal'

/**
 * @description Created the component
 * @author brunoteixeirasilva
 * @version 1.0
 */

function App() {
	const refreshNumber = useSelector(
		(s) => s.configuration.shouldReloadLanguage
	)
	const messageModal = useSelector(selectMessageModalState)

	// TODO: Document the instantiation of Services for using
	// const messageModalService = useMemo(() => new MessageModalService(), [])

	return (
		<MuiThemeProvider theme={theme}>
			<div className="App" key={refreshNumber}>
				<Router>
					<HeaderContainer color="primary" />
					<BodyContainer />
				</Router>
				<MessageModal
					text={messageModal.text}
					open={messageModal.open}
					type={messageModal.type}
				/>
			</div>
		</MuiThemeProvider>
	)
}

export default App
