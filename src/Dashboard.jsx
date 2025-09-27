import React from 'react'
import Sidebar from './components/Sidebar'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex flex-row bg-[#4dbf0c]'>
        <Sidebar />

        <div className='w-[90%] h-full flex flex-col bg-red'>

        </div>
    </div>
  )
}

export default Dashboard