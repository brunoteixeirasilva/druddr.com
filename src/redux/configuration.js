import { createSlice } from '@reduxjs/toolkit'
import { loadLanguageFile } from '@druddr/translate'

export const configurationSlice = createSlice({
	name: 'configuration',
	initialState: {
		language: 'pt_br',
		shouldReloadLanguage: false,
	},
	reducers: {
		setReload: (state, action = { shouldReloadLanguage: false }) => {
			state.shouldReloadLanguage = action.shouldReloadLanguage
		},
		changeLanguage: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.language = action.payload
			state.shouldReloadLanguage = true
			loadLanguageFile(require(`../i18n/${action.payload}.json`))
		},
	},
})

// Action creators are generated for each case reducer function
export const { changeLanguage, setReload } = configurationSlice.actions

export default configurationSlice.reducer
