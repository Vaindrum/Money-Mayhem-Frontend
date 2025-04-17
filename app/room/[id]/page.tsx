"use client"
import React from 'react'
import Board from '@/components/Board'
import RoomLeft from '@/components/RoomLeft'
import RoomRight from '@/components/RoomRight'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const page = () => {
  const router = useRouter;
  const params = useParams();
  const id = params.id as string;
  return (
    <div  className="flex h-screen w-full bg-[#140f1c]">
      <RoomLeft />
      <Board />
      <RoomRight />
    </div>
  )
}

export default page
