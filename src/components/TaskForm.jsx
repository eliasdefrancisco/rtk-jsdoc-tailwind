// @ts-check

import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { useAppDispatch } from "../app/store"
import { useAppSelector } from "../app/store"
import { addTask, editTask } from "../features/tasks/taskSlice"

export default function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })
  
  const tasks = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()

  function handleChange(ev) {
    console.log(ev.target.name, ev.target.value)
    setTask({
      ...task,
      [ev.target.name]: ev.target.value
    })
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    if (params.id) {
      dispatch(editTask({id: params.id, ...task}))
    }
    else {
      dispatch(addTask({...task, id: uuid()}))
    }
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      const task = tasks.find(task => task.id === params.id)
      task && setTask({
        title: task.title, 
        description: task.description,
        completed: task.completed,
      })
    }
  }, [tasks, params.id])

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label 
        htmlFor="title" 
        className="block text-xs font-bold mb-2"
      >
        Task:
      </label>
      <input 
        name="title" 
        type="text" 
        placeholder="Write a task" 
        onChange={handleChange} 
        value={task.title}  
        className="w-full bg-zinc-700 p-2 rounded-sm text-sm mb-2"
      />
      <label 
        htmlFor="description" 
        className="block text-xs font-bold mb-2"
      >
        Description:
      </label>
      <textarea 
        name="description" 
        placeholder="Write a description" 
        onChange={handleChange} 
        value={task.description}  
        className="w-full bg-zinc-700 p-2 rounded-sm text-sm"
      />
      <label htmlFor="completed" className="mr-2">Completed</label>
      <input 
        type="checkbox" 
        name="completed" 
        checked={task.completed} 
        onChange={ev => {
          setTask({
            ...task,
            completed: ev.target.checked
          })
        }}
      />
      <button 
        type="submit"
        className="bg-indigo-600 px-2 py-1 rounded-sm text-sm mt-2 block"
      >
        Save
      </button>
    </form>
  )
}