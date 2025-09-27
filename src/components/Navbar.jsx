import React from 'react'
import { BellIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import luffy from '../assets/luffy.jpeg'
import orb from '../assets/orb.png'

const Navbar = () => {
  return (
    <nav className='w-[90%] h-[70px] flex flex-row items-center justify-between'>

      <div className='flex flex-row w-fit h-full gap-[15px] items-center'> 
        <img src={orb} alt="" className='w-[30px] h-[30px] rounded-full'/>

        <div className='w-[90%] h-full flex flex-col justify-center '>
          <p><b>Good morning, Jordan</b></p>
          <p>05 Jun, 3.41 AM</p>
        </div>
      </div>

      <div className="flex flex-row w-fit h-full items-center justify-between gap-[40px]">
        <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
          bg-[#ffffff]/50 backdrop-blur-md hover:border hover:border-[#ffffff]/30">
          <MagnifyingGlassIcon size={25} color="#1a1a1a" weight="light" />
        </div>

        <div className="h-[30%] border-1 border-[#dbdbdb]"></div>

        <p>Dashboard</p>
        <p>Analytics</p>
        <p>Reports</p>  
      </div>

      <div className='flex flex-row w-fit h-full items-center gap-[40px]'>

        <div>
          <span className="absolute top-[5px] right-[150px] w-[20px] h-[20px] flex items-center justify-center 
            text-[14px] font-bold text-[#fff] bg-[red] rounded-[50%]">
            2
          </span>

          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            bg-[#ffffff]/50 backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <BellIcon size={23} color="#1a1a1a" weight="light" />
          </div>
        </div>
               

        <div className='w-fit h-fit'>
          {/* <div className="absolute inset-0 w-100 h-full rounded-full border-[6px] border-[purple] border-t-[pink]"></div> */}
          <img
            src={luffy}
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
        </div>

      </div> 
      
      
      
        
      

    </nav>
  )
}

export default Navbar