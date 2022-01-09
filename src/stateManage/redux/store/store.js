import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice'
import movieReducer from '../feature/movie/movieSlice'

export const storeRedux = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})