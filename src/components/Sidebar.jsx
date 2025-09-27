import React from 'react'
import logo from '../assets/logo.jpeg'
import { HeartbeatIcon } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className='w-[10%] h-full bg-sky-500 flex flex-col items-center justify-center p-4 border-r border-gray-300'>
        <div className='w-10 h-10 flex items-center'>
            <img src={logo} alt="" className='w-5 h-5 '/>
        </div>

        <div className='flex flex-col items-center justify-center gap-6'>
            <HeartbeatIcon size={32} color="#FF0000" weight="fill" className='cursor-pointer hover:scale-110 transition-transform'/>
        </div>
    </div>
  )
}

export default Sidebar