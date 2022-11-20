import { TypedUseSelectorHook } from "react-redux"
import { store } from "./store"

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type UseAppDispatch = () => AppDispatch
export type UseAppSelector = TypedUseSelectorHook<AppState>

