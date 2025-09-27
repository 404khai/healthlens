import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row bg-gradient-to-br from-[#eae6ff] via-[#fff3e7] to-[#ffdffb]  items-center justify-center'>
      <Sidebar />

      <div className='w-[90%] h-full flex flex-col items-center bg-violet-500'>
        <Navbar/>
      </div>
    </div>
  )
}

export default Dashboard