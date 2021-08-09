
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface TracksState {
	// eslint-disable-next-line no-undef
	searchTracks: SpotifyApi.TrackObjectFull[];
	
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
		// eslint-disable-next-line no-undef
		storeTracks: (state, action: PayloadAction<SpotifyApi.TrackObjectFull[]>) => {
			state.searchTracks = action.payload
		},
		storeSelected: (state, action: PayloadAction<string[]>) => {
			state.selectedTracks = action.payload
		}
	}
})

export const { storeTracks, storeSelected } = trackResult.actions

export default trackResult.reducer
