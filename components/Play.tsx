"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import {motion} from 'framer-motion';
import { IoDice } from 'react-icons/io5';
import { FaDiscord } from 'react-icons/fa';

const Play = () => {
  const [username, setusername] = useState('');
  const router = useRouter();

  const handlePlay = () => {
    // if(!username.trim()) return;
    router.push('/room/123');
  }
  return (
    <main className='min-h-screen bg-[#1a1625] text-white flex flex-col items-center justify-center px-4'>
      <div className='absolute top-4 right-4 flex gap-4 text-sm text-purple-300'>
        <button className='cursor-pointer p-2 hover:bg-gray-800 rounded-lg'>Store</button>
        <button className='cursor-pointer p-2 hover:bg-gray-800 rounded-lg'>Login</button>
      </div>

      <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} className='text-center'>
        <div className='flex justify-center mb-4'>
          <IoDice size={64}/>
        </div>
        <h1 className='text-4xl font-bold'>MoneyMayhem</h1>
        <p className='text-purple-300 mt-2'>Build your empire</p>

        <div className='mt-8 space-y-4'>
          Input
          <div className='mt-5'>
          <button onClick={handlePlay} className='bg-purple-700 cursor-pointer border-0 px-15 py-4 rounded-lg'>Play</button>
          </div>
          <div className='flex justify-center gap-4 text-sm text-purple-300'>
            <button className='cursor-pointer border px-5 py-3 rounded-lg'>All Rooms</button>
            <button className='cursor-pointer border px-5 py-3 rounded-lg'>Create a private game</button>
          </div>
        </div>
      </motion.div>
    <div className='absolute bottom-4 right-4 bg-purple-700 rounded-full p-2'>
      <a href="#" className='cursor-pointer'><FaDiscord /></a>
    </div>
    </main>
  )
}

export default Play
