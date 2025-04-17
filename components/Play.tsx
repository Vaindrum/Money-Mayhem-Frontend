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
    <main className='min-h-screen bg-gradient-to-b to-[#1a0c2d] from-black text-white flex flex-col items-center justify-center px-4'>
      <div className='absolute top-4 right-4 flex gap-4 text-sm text-primary'>
        <button className='cursor-pointer p-2 hover:bg-gray-800 rounded-lg'>Store</button>
        <button className='cursor-pointer p-2 hover:bg-gray-800 rounded-lg'>Login</button>
      </div>

      <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} className='text-center'>
        <div className='flex justify-center mb-4'>
          <IoDice size={124} className='animate-pulse hover:animate-spin'/>
        </div>
        <h1 className='text-6xl text-white font-bold'>MoneyMayhem</h1>
        <p className='text-primary text-2xl font-medium mt-2'>Build your empire. Rags to Riches.</p>

        <div className='mt-8 space-y-4'>
          <input type="text" placeholder='Your nickname....' className='bg-gray-700 px-4 py-2 rounded-md w-[10.5rem] border-0'/>
          <div className=''>
          <button onClick={handlePlay} className='bg-primary cursor-pointer font-bold text-2xl border-0 px-15 py-4 rounded-lg'>Play</button>
          </div>
          <div className='flex justify-center gap-4 text-sm'>
            <button className='cursor-pointer border-0 px-5 py-3 bg-secondary font-medium rounded-lg'>All Rooms</button>
            <button className='cursor-pointer border-0 px-5 py-3 bg-secondary font-medium rounded-lg'>Create a private game</button>
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
