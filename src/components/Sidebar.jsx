import React from 'react'
import logo from '../assets/logo.png'
import { UserIcon, HeartbeatIcon, ShieldCheckIcon, CalendarDotsIcon, SignOutIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className='w-[10%] h-[90%] bg-sky-500 flex flex-col items-center justify-between p-4 border-r border-gray-300'>
        <div className='w-full h-10 flex bg-gray-100 items-center'>
            <img src={logo} alt="" className='w-full h-full '/>
        </div>

        <div className='bg-gray-50 w-full h-[50%] flex flex-col items-center justify-between gap-6 mb-10'>
          <UserIcon size={25} color="#555" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
          <HeartbeatIcon size={25} color="#555" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
          <ShieldCheckIcon size={25} color="#555" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
          <CalendarDotsIcon size={25} color="#555" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
          <HeartbeatIcon size={25} color="#555" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
        </div>

        <SignOutIcon size={32} color="#FF0000" weight="light" className='cursor-pointer hover:scale-110 transition-transform'/>
    </div>
  )
}

export default Sidebar