import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">

      <h2 className="text-gray-900 text-3xl font-semibold mb-6 text-center">
        Todos
      </h2>

      <div className="w-full max-w-md">
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow-md"
            >
              <div className="text-white break-words">
                {todo.text}
              </div>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-3 flex items-center justify-center 
             w-10 h-7 
             bg-red-500 hover:bg-red-600 
             rounded-full 
             transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6Z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Todos