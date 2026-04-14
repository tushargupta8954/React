import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
 

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2.5 rounded-3xl text-white'>
            <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "red"}} onClick={()=> setColor("red")}>
              Red
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700 shadow-lg shadow-gray-700'
             style={{backgroundColor: "brown"}} onClick={()=> setColor("brown")}>
              Brown
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "indigo"}} onClick={()=> setColor("indigo")}>
              Indigo
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "Orange"}} onClick={()=> setColor("Orange")}>
              Orange
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>
              Purple
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "black"}} onClick={()=> setColor("black")}>
              Black
              </button>
              <button className='rounded-3xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>
              Green
              </button>
              <button className='rounded-2xl px-3 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>
              Blue
              </button>
              <button className='rounded-3xl px-3 text-gray-950 py-1 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>
              Yellow
              </button>
              <button className='rounded-3xl px-3 py-1  text-gray-950 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "gray"}} onClick={()=> setColor("gray")}>
              Gray
              </button>
              <button className='rounded-3xl px-3 py-1 text-gray-950 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "white"}} onClick={()=> setColor("white")}>
              White
              </button>
              <button className='rounded-3xl px-3 py-1 text-gray-950 cursor-pointer shadow-lg shadow-gray-700'
             style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>
              Pink
              </button>
              
              
              
            

          </div>

        </div>
      </div>
    </>
  )
}

export default App
