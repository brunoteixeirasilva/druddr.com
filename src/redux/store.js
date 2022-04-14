import { configureStore } from '@reduxjs/toolkit'
import configurationReducer from './configuration'

export default configureStore({
	reducer: {
		configuration: configurationReducer,
	},
})
