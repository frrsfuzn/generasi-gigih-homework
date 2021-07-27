import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
	name: 'token',
	initialState: {
		value: '',
	},
	reducers: {
		storeToken: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { storeToken } = tokenSlice.actions

export default tokenSlice.reducer