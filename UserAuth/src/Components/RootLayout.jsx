import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='bg-theme w-full h-[100vh] px-[140px] '>
        <Outlet/>
    </div>
  )
}

export default RootLayout