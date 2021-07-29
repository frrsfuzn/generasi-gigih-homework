import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState:{
		value: {}
	},
	reducers:{
		storeUser: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { storeUser } = userSlice.actions

export default userSlice.reducer
