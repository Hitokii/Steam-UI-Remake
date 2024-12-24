import React from 'react'

export default function Home() {
  return (
    <div className='relative'>
      <img src="sales.png" alt="summer sale image" />
      <div className='absolute w-2/3 left-1/2 -translate-x-1/2'>
        <h1 className='text-2xl motiva font-semibold'>POPULAIRES</h1>
      </div>
    </div>
  )
}