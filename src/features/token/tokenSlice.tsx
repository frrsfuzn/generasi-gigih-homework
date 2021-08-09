import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface TokenState {
	value: string
}

const initialState: TokenState = {
	value: '',
}

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		storeToken: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}
})

export const { storeToken } = tokenSlice.actions

export default tokenSlice.reducer