import React from 'react'
import logo from '../assets/logo.png'
import { UserIcon, HeartbeatIcon, ShieldCheckIcon, CalendarDotsIcon, SignOutIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className='w-[10%] h-[90%] flex flex-col items-center justify-between p-4 border-r border-[#737373]'>
        
        {/* Logo */}
        <div className='w-full h-5 flex items-center mb-6'>
            <img src={logo} alt="logo" className='w-full h-full' />
        </div>

        {/* Main icons */}
        <div className="w-full h-[40%] flex flex-col items-center justify-start gap-[50px]">
          <div className="p-2 rounded-xl cursor-pointer hover:bg-[#fff] hover:scale-110 transition-all">
            <UserIcon size={25} color="#1a1a1a" weight="light" />
          </div>
          
          <div className="p-2 rounded-xl cursor-pointer hover:bg-white hover:scale-110 transition-all">
            <HeartbeatIcon size={25} color="#1a1a1a" weight="light" />
          </div>
          
          <div className="p-2 rounded-xl cursor-pointer hover:bg-white hover:scale-110 transition-all">
            <ShieldCheckIcon size={25} color="#1a1a1a" weight="light" />
          </div>
          
          <div className="p-2 rounded-xl cursor-pointer hover:bg-white hover:scale-110 transition-all">
            <CalendarDotsIcon size={25} color="#1a1a1a" weight="light" />
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
