import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	text: 'Empty',
	open: false,
	type: 'info',
}

export const messageModalSlice = createSlice({
	name: 'messageModal',
	initialState,
	reducers: {
		open: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.text = action.payload.text
			state.open = true
			state.type = action.payload.type
		},
		close: (state) => {
			state.open = initialState.open
		},
		reset: (state) => {
			state.open = initialState.open
			state.text = initialState.text
			state.type = initialState.type
		},
	},
})

export const selectMessageModalState = (state) => state.messageModal

export const selectMessageModalText = (state) =>
	selectMessageModalState(state).text

export const selectMessageModalOpen = (state) =>
	selectMessageModalState(state).open

export const selectMessageModalType = (state) =>
	selectMessageModalState(state).type

// Action creators are generated for each case reducer function
export const { open, close, reset } = messageModalSlice.actions

export default messageModalSlice.reducer
