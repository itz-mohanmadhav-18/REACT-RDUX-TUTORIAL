import React from 'react'
import '../index.css'
export default function Card(data) {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1616241673111-508b4662c707?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dz" alt="image of a cup" className="w-40" />
        
        <p className='text-gray-500'>{data.category}</p>
        <p className='text-black'>{data.title}</p>
    </div>
  )
}