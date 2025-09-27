import React from 'react'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row bg-gradient-to-br from-[#e5dfff] via-[#ffdffb] to-[#ffe2c4] items-center justify-center'>
      <Sidebar />

      <div className='w-[90%] h-full flex flex-col bg-violet-500'>

      </div>
    </div>
  )
}

export default Dashboard