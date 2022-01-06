import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/user/userSlice'

export const storeRedux = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})