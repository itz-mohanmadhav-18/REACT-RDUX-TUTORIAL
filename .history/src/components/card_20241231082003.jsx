import React from 'react'
import '../index.css'
export default function Card(data) {
  return (
    <div>
        <img src={data.photo} alt="image of a cup" className="w-48 h-40 object-cover" />
        
        <p className='text-gray-500'>{data.category}</p>
        <p className='text-black'>{data.title}</p>
    </div>
  )
}
