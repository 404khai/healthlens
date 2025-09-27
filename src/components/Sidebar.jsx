import React from 'react'
import logo from '../assets/logo.png'
import { UserIcon, HeartbeatIcon, ShieldCheckIcon, CalendarDotsIcon, SignOutIcon, FilesIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className='w-[10%] h-[90%] flex flex-col items-center justify-between p-4 border-r border-[#737373]'>
        
        {/* Logo */}
        <div className='w-fit h-fit flex flex-col items-center'> 
            <img src={logo} alt="logo" className='w-full h-full' />
            <p>HealthLens</p>
        </div>

        {/* Main icons */}
        <div className="w-full h-fit flex flex-col items-center justify-start gap-[30px] ">
          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            hover:bg-[#ffffff]/30 hover:backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <UserIcon size={23} color="#1a1a1a" weight="light" />
          </div>

          
          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            hover:bg-[#ffffff]/30 hover:backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <HeartbeatIcon size={25} color="#1a1a1a" weight="light" />
          </div>
          
          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            hover:bg-[#ffffff]/30 hover:backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <ShieldCheckIcon size={25} color="#1a1a1a" weight="light" />
          </div>
          
          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            hover:bg-[#ffffff]/30 hover:backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <CalendarDotsIcon size={25} color="#1a1a1a" weight="light" />
          </div>

          <div className="p-[5px] cursor-pointer rounded-[10px] transition-all hover:scale-110 
            hover:bg-[#ffffff]/30 hover:backdrop-blur-md hover:border hover:border-[#ffffff]/30">
            <FilesIcon size={25} color="#1a1a1a" weight="light" />
          </div>
        </div>

        {/* Sign out button */}
        <div className="p-2 rounded-xl cursor-pointer hover:bg-red-100 hover:scale-110 transition-all">
          <SignOutIcon size={25} color="#FF0000" weight="light" />
        </div>
    </div>
  )
}

export default Sidebar
