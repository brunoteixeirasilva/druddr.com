import App from 'App'
import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'

function StateLayer() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

export { store }

export default StateLayer
