import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import data from './assets/data.js'



function App() {
  

  return (
    <div className='flex flex-wrap  gap-5 items-center justify-center '>
      
       {data.map((item, index) => (
        <Card key={index} city={item.city} image={item.image} unique={item.unique} msg={item.msg}/>
      ))}
    </div>
  )
}

export default App
