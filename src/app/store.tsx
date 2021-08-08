import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/token/tokenSlice'
import userReducer from '../features/user/userSlice'
import trackResultReducer from '../features/trackResult/trackResultSlice';

export const store = configureStore({
	reducer: {
		token: tokenReducer,
		user: userReducer,
		trackResult: trackResultReducer
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch