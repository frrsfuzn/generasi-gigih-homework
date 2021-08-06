import { createSlice } from '@reduxjs/toolkit'

export const trackResult = createSlice({
	name: 'user',
	initialState:{
		searchTracks: {},
		selectedTracks: []
	},
	reducers:{
		storeTracks: (state, action) => {
			state.searchTracks = action.payload
		},
		storeSelected: (state, action) => {
			state.selectedTracks = action.payload
		}
	}
})

export const { storeTracks, storeSelected } = trackResult.actions

export default trackResult.reducer
