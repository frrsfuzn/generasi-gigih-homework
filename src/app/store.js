import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/token/tokenSlice'
import userReducer from '../features/user/userSlice'
import trackResultReducer from '../features/trackResult/trackResultSlice';

export default configureStore({
	reducer: {
		token: tokenReducer,
		user: userReducer,
		trackResult: trackResultReducer
	},
})