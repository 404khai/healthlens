import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import brain from './assets/brain.png'
import pills from './assets/pills.png'
import blood from './assets/blood.png'
import syringe from './assets/syringe.png'
import sweat from './assets/sweat.png'
import { ShieldCheckIcon } from '@phosphor-icons/react'

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
                <svg className="w-full h-32" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
                <defs>
                  <linearGradient id="wave1" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7"/>   
                    <stop offset="1" stopColor="#06b6d4"/> 
                  </linearGradient>
                  <linearGradient id="wave2" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff"/> 
                    <stop offset="1" stopColor="#ec4899"/> 
                  </linearGradient>
                </defs>

                
                <path d="M0 100 C 100 50, 200 150, 300 100 S 500 150, 500 100" 
                      stroke="url(#wave1)" strokeWidth="4" fill="none" />

                
                <path d="M0 110 C 100 60, 200 160, 300 110 S 500 160, 500 110" 
                      stroke="url(#wave2)" strokeWidth="4" fill="none" />
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
                <svg className="w-full h-16" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff3b3b" />
                      <stop offset="1" stopColor="#ff2d2d" />
                    </linearGradient>
                  </defs>
                  <path d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C190 18 200 25 200 25" 
                    stroke="url(#grad1)" strokeWidth="3" fill="none"/>
                </svg>

              </div>
            </div>


            <div className="grid grid-cols-2 gap-[30px]">  
              <div className="backdrop-blur-lg bg-[#ffffff]/40 p-[5px] border border-[#fff]/20 shadow-lg rounded-[10px] p-4 flex flex-row items-center justify-around">
                <img src={syringe} alt="Blood" className="w-[30px] h-[30px]" />
                <p className="text-[#000]"><b>2</b></p>
              </div>

              <div className="backdrop-blur-lg bg-[#ffffff]/40 p-[5px] border border-[#fff]/20 shadow-lg rounded-[10px] p-4 flex flex-row items-center justify-between">
                <ShieldCheckIcon size={25} color="#1ae26d" weight="fill" />
                <div className='w-full h-full flex flex-col'>
                  <p className="text-[#747474] text-[14px]">Your Brain Activity</p>
                  <p className="text-green-500"><b>Normal</b></p>
                </div>
                
              </div>
            </div>
          </div>

          <img src={brain} alt="" className='w-[330px] h-[300px]'/>

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
                <svg className="w-full h-32" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <defs>
                    
                    <linearGradient id="wave1" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7"/>
                      <stop offset="1" stopColor="#06b6d4"/>
                    </linearGradient>

              
                    <linearGradient id="wave2" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ffffff"/>
                      <stop offset="1" stopColor="#ec4899"/>
                    </linearGradient>

                  
                    <path id="sineWave" d="M0 100 C 50 50, 100 150, 150 100 S 250 150, 300 100 S 400 150, 450 100 S 550 150, 600 100" />
                  </defs>

              
                  <use href="#sineWave" stroke="url(#wave1)" strokeWidth="4" fill="none">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0 0"
                      to="-150 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use href="#sineWave" stroke="url(#wave2)" strokeWidth="4" fill="none" transform="translate(0,10)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0 0"
                      to="-150 0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </use>
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
                <svg className="w-full h-16" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff3b3b" />
                      <stop offset="1" stopColor="#ff2d2d" />
                    </linearGradient>
                  </defs>
                  <path d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C190 18 200 25 200 25" 
                    stroke="url(#grad1)" strokeWidth="3" fill="none"/>
                </svg>

              </div>
            </div>


            <div className="grid grid-cols-2 gap-[30px]">  
              <div className="backdrop-blur-lg bg-[#ffffff]/40 p-[5px] border border-[#fff]/20 shadow-lg rounded-[10px] p-4 flex flex-row items-center justify-around">
                <img src={syringe} alt="Blood" className="w-[30px] h-[30px]" />
                <p className="text-[#000]"><b>2</b></p>
              </div>

              <div className="backdrop-blur-lg bg-[#ffffff]/40 p-[5px] border border-[#fff]/20 shadow-lg rounded-[10px] p-4 flex flex-row items-center justify-between">
                <ShieldCheckIcon size={25} color="#1ae26d" weight="fill" />
                <div className='w-full h-full flex flex-col'>
                  <p className="text-[#747474] text-[14px]">Your Brain Activity</p>
                  <p className="text-green-500"><b>Normal</b></p>
                </div>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard