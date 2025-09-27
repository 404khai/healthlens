import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import brain from './assets/brain.png'
import pills from './assets/pills.png'
import blood from './assets/blood.png'
import syringe from './assets/syringe.png'
import sweat from './assets/sweat.png'

const Dashboard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row bg-gradient-to-br from-[#eae6ff] via-[#fff3e7] to-[#ffdffb]  items-center justify-center'>
      <Sidebar />

      <div className='w-[90%] h-full pt-[5px] pb-[5px] flex flex-col items-center bg-violet-500'>
        <Navbar/>

        <div className='w-full h-screen flex flex-row items-center justify-between  '>

          <div className='flex flex-col h-full w-[30%] items-center justify-between p-[5px]'>
            <p><b>What's Up With Your Health, <br /> TODAY!</b></p>
            
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg rounded-2xl p-4">
              <img src="/your-image.png" alt="Graph" className="w-full h-24 object-contain" />
            </div>

            
            <div className="grid grid-cols-2 gap-[30px]">
              
              <div className="backdrop-blur-lg bg-[#ffffff]/50 p-[5px] border border-[#fff]/50 shadow-lg rounded-[10px] p-4 flex flex-col items-center justify-center">
                <div className='flex flex-row justify-around w-full h-[50%]'>
                  <img src={sweat} alt="Sweat" className="w-[30px] h-[30px]" />
                  <p className="text-red-600 font-semibold mt-2">Sweating<br/>Good</p>
                </div>
                <svg className="w-full h-16" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C190 18 200 25 200 25" 
                    stroke="url(#grad1)" stroke-width="3" fill="none"/>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="0">
                      <stop stop-color="#7F00FF"/>
                      <stop offset="1" stop-color="#E100FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="backdrop-blur-lg bg-[#ffffff]/50 p-[5px] border border-[#fff]/50 shadow-lg rounded-[10px] p-4 flex flex-col items-center justify-center">
                <img src={pills} alt="Pills" className="w-[40px] h-[50px]" />
                <p className="text-[20px]"><b>3</b></p>
                <p className='text-[13px]'>Pills</p>
              </div>

            
            </div>

            
            <div className="grid grid-cols-2 gap-[30px]">
              
              <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">2h</p>
                <p className="text-gray-600">Hours</p>
              </div>

              <div className="backdrop-blur-lg bg-[#ffffff]/50 p-[5px] border border-[#fff]/50 shadow-lg rounded-[10px] p-4 flex flex-col items-center justify-center">
                <div className='flex flex-row justify-around w-full h-[50%]'>
                  <img src={blood} alt="Blood" className="w-[30px] h-[30px]" />
                  <p className="text-red-600 font-semibold mt-2">Blood<br/>Normal</p>
                </div>
                <svg className="w-full h-16" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C190 18 200 25 200 25" 
                    stroke="url(#grad1)" strokeWidth="3" fill="none"/>
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#ff3b3b"/>
                      <stop offset="1" stopColor="#ff2d2d"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4">  
              <div className="backdrop-blur-lg bg-[#ffffff]/40 p-[5px] border border-[#fff]/20 shadow-lg rounded-[10px] p-4 flex flex-row items-center justify-around">
                <img src={syringe} alt="Blood" className="w-[30px] h-[30px]" />
                <p className="text-[#000]"><b>2</b></p>
              </div>

              <div className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center col-span-2">
                <p className="text-gray-700">Your Brain Activity</p>
                <p className="text-green-500 font-semibold">Normal</p>
              </div>
            </div>
          </div>

          <img src={brain} alt="" className='w-[330px] h-[300px]'/>


        </div>

      </div>
    </div>
  )
}

export default Dashboard