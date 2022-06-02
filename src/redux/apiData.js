import { createSlice } from '@reduxjs/toolkit'

import { BackBone } from 'utils/api'

const initialState = {
	selectedApi: 'pets',
	data: null,
}

export const apiDataSlice = createSlice({
	name: 'apiData',
	initialState,
	reducers: {
		changeApi: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.selectedApi = action.payload
		},
		reset: (state, action) => {
			state.selectedApi = BackBone.default.key
		},
		setData: (state, action) => {
			state.data = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { changeApi, reset, setData } = apiDataSlice.actions

export const selectObject = (state) => state.apiData

export const selectSelectedApi = (state) => selectObject(state).selectedApi

export const selectApiData = (state) => selectObject(state).data

export default apiDataSlice.reducer
