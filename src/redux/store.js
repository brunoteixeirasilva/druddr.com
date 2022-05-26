import { configureStore } from '@reduxjs/toolkit'

// Importing Slices
import apiDataReducer from './apiData'
import configurationReducer from './configuration'
import messageModalReducer from './messageModal'

export default configureStore({
	reducer: {
		apiData: apiDataReducer,
		configuration: configurationReducer,
		messageModal: messageModalReducer,
	},
})
