"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  return (
      <section className='min-h-screen bg-gradient-to-b from-[#1a0c2d] to-black text-white px-6 md:px-24 py-16'>

      <div className='max-w-4xl mx-auto space-y-10'>

      <div className="flex justify-between items-center py-4 text-white">

  <div className="flex items-center gap-4">
    <h1 className="text-2xl md:text-4xl font-bold cursor-pointer" onClick={() => router.push('/')}>MoneyMayhem</h1>
  </div>

  <div className="flex gap-4 text-sm text-primary">
    <button className="cursor-pointer p-2 hover:bg-gray-800 rounded-lg">Store</button>
    <button className="cursor-pointer p-2 hover:bg-gray-800 rounded-lg">Login</button>
  </div>
</div>


      <div className='flex justify-between items-center hover:bg-gray-900 p-5 rounded-lg'>
        <h1 className='text-3xl md:text-4xl font-bold'>Vaindrum</h1>
        <div className='flex flex-col items-end text-sm md:text-base'>
          <div className='flex items-center gap-2'>
            <span className='text-yellow-300'>✨</span>
            <span>0/0 Karma Points</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-purple-400'>🏆</span>
            <span>0% Winning Rate</span>
          </div>
        </div>
      </div>

      {/* <hr className='border-green-700' /> */}
        
        <div>
          <h2 className='text-xl mb-4 text-primary'>Statistics</h2>
          <ul className='space-y-3 text-sm md:text-base'>
            <li className='flex items-center gap-3'>
            🎮 Played <span className="font-semibold">0</span> games
            </li>
            <li className="flex items-center gap-3">
              🏆 Won <span className="font-semibold">0</span> games
            </li>
            <li className="flex items-center gap-3">
              📅 Joined <span className="font-semibold">1 week ago</span>
            </li>
            <li className="flex items-center gap-3">
              👥 Has <span className="font-semibold">0</span> friends
            </li>
          </ul>
        </div>

        {/* <hr className='border-purple-700' /> */}
        
        <div>
          <h2 className='text-xl mb-4 text-primary'>Inventory</h2>
          <div className='border-2 border-dashed border-gray-700 rounded-lg p-6 text-center text-white'>
          ✨ No items owned
          </div>
        </div>

        <div>
          <h2 className='text-xl mb-4 text-primary'>Achievements</h2>
          <div className='border-2 border-dashed border-gray-700 rounded-lg p-6 text-center text-white'>
          ✨ No items owned
          </div>
        </div>

        <div>
          <h2 className='text-xl mb-4 text-primary'>Statistics</h2>
          <div className='border-2 border-dashed border-gray-700 rounded-lg p-6 text-center text-white'>
          ✨ No items owned
          </div>
        </div>

        <div>
          <h2 className='text-xl mb-4 text-primary'>Friends</h2>
          <div className='border-2 border-dashed border-gray-700 rounded-lg p-6 text-center text-white'>
          ✨ No items owned
          </div>
        </div>

        <div>
          <h2 className='text-xl text-primary'>Games History</h2>
          <p className='mb-4 text-gray-400'>Only last 80 games are shown. Learn more about this list</p>
          <div className='border-2 border-dashed border-gray-700 rounded-lg p-6 text-center text-white'>
          ✨ No items owned
          </div>
        </div>

        </div>
      </section>
  )
}

export default page
