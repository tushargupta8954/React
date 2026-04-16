import React, { useState } from 'react'


const Card = ({city, unique,image, msg}) => {
  const [click, setClick] = useState(false)
  

  const change =()=>{
    setClick(alert(msg))
   
  }

  return (
    
    <div className='flex flex-wrap items-center justify-center  '>
      <div className="w-80 mt-8 h-120  rounded-md shadow-md bg-black text-gray-100">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{city}</h2>
            <p className="text-gray-400">
             {unique}
              
            </p>
          </div>
          <button  
            type="button" onClick={change}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide cursor-pointer rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default Card
