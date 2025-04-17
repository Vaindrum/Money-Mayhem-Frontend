import React from 'react'

const RoomLeft = () => {
  return (
    <div className="w-full md:w-1/5 bg-[#2d2434] p-4 flex flex-col gap-4 text-white h-full">
      <div className="bg-[#3b2e48] p-4 rounded-xl">
        <p className="text-sm font-semibold mb-2">Share this game</p>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value="https://richup.io"
            readOnly
            className="bg-[#4a3a5a] text-white text-sm rounded-md px-2 py-1 w-full outline-none"
          />
          <button className="bg-[#6c4f84] px-2 py-1 text-sm rounded-md hover:bg-[#7a5a94]">
            Copy
          </button>
        </div>
        <button className="text-xs underline mt-2 hover:text-gray-300">
          View room settings
        </button>
      </div>

      <button className="bg-[#3b2e48] text-xs text-center py-2 rounded-xl hover:bg-[#4a3a5a]">
        Disable your ad blocker to support Richup.io
      </button>

      <div className="bg-[#3b2e48] flex-1 rounded-xl flex flex-col">
        <div className="p-3 border-b border-[#4a3a5a] text-sm font-semibold">
          Chat
        </div>
        <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-300">
          No messages yet
        </div>
        <div className="p-3 border-t border-[#4a3a5a]">
          <input
            type="text"
            placeholder="Say something..."
            className="w-full bg-[#4a3a5a] text-white text-sm px-3 py-2 rounded-md outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default RoomLeft
