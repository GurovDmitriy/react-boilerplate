import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import delayedMessageMiddleware from "../middleware/delayedMessageMiddleware/delayedMessageMiddleware"
import loggerMiddleware from "../middleware/loggerMiddleware/loggerMiddleware"
import { authReducer } from "./auth/authSlice"

const appMiddleware = [delayedMessageMiddleware, loggerMiddleware]

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
