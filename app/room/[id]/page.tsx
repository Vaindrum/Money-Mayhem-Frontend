import React from 'react'
import Board from '@/components/Board'
import RoomLeft from '@/components/RoomLeft'
import RoomRight from '@/components/RoomRight'

const page = () => {
  return (
    <div>
      <RoomLeft />
      <Board />
      <RoomRight />
    </div>
  )
}

export default page
