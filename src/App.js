import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import HeaderContainer from './components/header'
import BodyContainer from './components/content'

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeaderContainer />
				<BodyContainer />
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header> */}
			</div>
		)
	}
}

export default App
