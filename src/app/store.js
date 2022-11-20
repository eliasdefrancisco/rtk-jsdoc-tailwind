// @ts-check

/**
 * @typedef { import("./store.types").UseAppDispatch } UseAppDispatch
 * @typedef { import("./store.types").UseAppSelector } UseAppSelector
 *  */

import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import taskReducer from "../features/tasks/taskSlice"

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

// Use throughout your app instead of plain `useDispatch` and `useSelector`

/** @type {UseAppDispatch} */
export const useAppDispatch = useDispatch

/** @type {UseAppSelector} */
export const useAppSelector = useSelector