import React from 'react'
import { BellIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import luffy from '../assets/luffy.jpeg'
const Navbar = () => {
  return (
    <nav className='w-[90%] h-[70px] flex flex-row items-center justify-between'>


      <div className="flex flex-row bg-[#fdf400] h-full items-center justify-between gap-[50px]">
        <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
          bg-[#ffffff]/50 backdrop-blur-md hover:border hover:border-[#ffffff]/30">
          <MagnifyingGlassIcon size={30} color="#1a1a1a" weight="light" />
        </div>

        <div className="h-[30%] border-1 border-[#dbdbdb]"></div>

        <p>Dashboard</p>
        <p>Analytics</p>
        <p>Reports</p>  
      </div>

      <div className='flex flex-row w-[50px] h-full'>

        <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
          bg-[#ffffff]/50 backdrop-blur-md hover:border hover:border-[#ffffff]/30">
          <BellIcon size={23} color="#1a1a1a" weight="light" />
        </div>
        {/* <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">
            2
          </span> */}
        <div className='w-fit h-fit'>
          <div className="absolute inset-0 rounded-full border-[6px] border-purple-300 border-t-purple-600"></div>
          <img
            src={luffy}
            alt="Profile"
            className="w-[5px] h-[10px] rounded-full object-cover"
          />
        </div>
      </div> 
      
      
      
        
      

    </nav>
  )
}

export default Navbar