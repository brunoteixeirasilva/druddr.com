import { configureStore } from '@reduxjs/toolkit'
import apiDataReducer from './apiData'
import configurationReducer from './configuration'

export default configureStore({
	reducer: {
		apiData: apiDataReducer,
		configuration: configurationReducer,
	},
})
