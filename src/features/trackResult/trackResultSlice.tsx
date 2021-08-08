import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TracksState {
	searchTracks: object[];
	selectedTracks: string[];
}

const initialState: TracksState = {
	searchTracks: [],
	selectedTracks: [],
}

export const trackResult = createSlice({
	name: 'user',
	initialState,
	reducers:{
		storeTracks: (state, action: PayloadAction<object[]>) => {
			state.searchTracks = action.payload
		},
		storeSelected: (state, action: PayloadAction<string[]>) => {
			state.selectedTracks = action.payload
		}
	}
})

export const { storeTracks, storeSelected } = trackResult.actions

export default trackResult.reducer
