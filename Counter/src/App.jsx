import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(18)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='flex items-center justify-center h-140 bg-gray-950 ' >
      <div className='text-center size-100 bg-gray-800 shadow-xl shadow-gray-200 rounded-2xl text-gray-100 p-8 '>
        <h1 className='flex justify-center m-4 text-2xl font-bold text-gray-350'>Counter</h1>
        <p className='m-4'>{counter}</p>
        <button className='bg-green-500  hover:bg-green-700 cursor-pointer  rounded-full px-7 py-1.5 m-2  ' onClick={addValue}>Increase</button>

        <p className='m-4'>{counter}</p>
        <button className='bg-green-500 hover:bg-green-700 cursor-pointer rounded-full px-7 py-1.5 m-2 poi ' onClick={removeValue}>Decrease</button>
      </div>
    </div>
  )
}

export default App
