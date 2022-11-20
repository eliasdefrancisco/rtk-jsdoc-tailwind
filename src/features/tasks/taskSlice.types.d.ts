import { CaseReducer, PayloadAction, Slice } from "@reduxjs/toolkit"

export type TaskState = {
  id: string
  title: string
  description: string
  completed: boolean
}[]

type AddTaskAction = PayloadAction<{
  id: string
  title: string
  description: string
  completed?: boolean
}>

type EditTaskAction = PayloadAction<{
  id: string
  title: string
  description: string
  completed?: boolean
}>

type DeleteTaskAction = PayloadAction<{
  id: string
}>

export type TaskSlice = Slice<
  TaskState, 
  {
    addTask: CaseReducer<TaskState, AddTaskAction>
    editTask: CaseReducer<TaskState, EditTaskAction>
    deleteTask: CaseReducer<TaskState, DeleteTaskAction>
  },
  "tasks"
>