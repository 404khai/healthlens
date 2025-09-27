import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import brain from './assets/brain.png'

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row bg-gradient-to-br from-[#eae6ff] via-[#fff3e7] to-[#ffdffb]  items-center justify-center'>
      <Sidebar />

      <div className='w-[90%] h-full pt-[5px] pb-[5px] flex flex-col items-center bg-violet-500'>
        <Navbar/>

        <div className='w-full h-screen bg-[#3defde] flex flex-row items-center justify-between'>

          <div className='flex flex-col h-full w-[30%] bg-[#ff3344] items-center justify-between'>
            <p><b>What's Up With Your Health, <br /> TODAY!</b></p>
            
          </div>

          <img src={brain} alt="" className='w-[330px] h-[300px]'/>


        </div>

      </div>
    </div>
  )
}

export default Dashboard