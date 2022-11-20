// @ts-check

import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/store"
import { deleteTask } from "../features/tasks/taskSlice"

export default function TaskList() {
  const tasks = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask({id}))
  }

  return (
    <div className="w-5/6">
      <header className="flex justify-between items-center py-4">
        <h1>Total tasks {tasks.length}</h1>
        <Link 
          to='/create-task' 
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {
          tasks.map(task => (
            <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <h3 className={`${task.completed && 'line-through'}`}>
                  {task.title}
                </h3>
                <div className="flex gap-x-2">
                  <Link 
                    to={`/edit-task/${task.id}`}
                    className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-600 px-2 py-1 rounded-sm text-sm"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p>{task.description}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}