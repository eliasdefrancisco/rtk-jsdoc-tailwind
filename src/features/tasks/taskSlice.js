// @ts-check

/** 
 * @typedef { import("./taskSlice.types").TaskState } TaskState
 * @typedef { import("./taskSlice.types").TaskSlice } TaskSlice
 * */

import { createSlice } from "@reduxjs/toolkit"

/** @type {TaskState} */
const initialState = [
  {
    id: "1",
    title: "First Task",
    description: "This is the first task",
    completed: false,
  },
  {
    id: "2",
    title: "Second Task",
    description: "This is the second task",
    completed: false,
  },
  {
    id: "3",
    title: "Third Task",
    description: "This is the third task",
    completed: false,
  },
]

/** @type {TaskSlice} */
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const completed = action.payload.completed || false
      state.push({...action.payload, completed})
    },
    editTask: (state, action) => {
      const { id, title, description, completed = false } = action.payload
      const task = state.find((task) => task.id === id)
      if (task) {
        task.title = title
        task.description = description
        task.completed = completed
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id)
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer