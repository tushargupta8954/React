import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

    
  return (
    <div className='flex flex-row gap-10 items-center justify-center '>
      <Card city="Mumbai" unique="Bollywood's fast-paced, never-sleeping dreams, financial hub."/>
      <Card city="Chennai" unique="Classical music, culture,Tamil cinema's, SaaS Capita and beaches."/>
    </div>
  )
}

export default App
