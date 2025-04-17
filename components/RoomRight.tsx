import React from 'react'

const RoomRight = () => {
  const players = [
    { name: "Vaibhav", color: "bg-pink-500", money: 1000, isHost: true },
    { name: "Dharul", color: "bg-yellow-400", money: 1000 },
    { name: "Shiva", color: "bg-green-400", money: 1000 },
  ];

  return (
    <div className="w-full md:w-1/5 bg-[#1e1723] text-white p-4 flex flex-col gap-6">
      {/* Player List */}
      <div className="flex flex-col gap-2">
        {players.map((p, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-[#2d2138] rounded-md">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${p.color}`} />
              <span className="font-semibold">{p.name}</span>
              {p.isHost && <span className="text-yellow-400">👑</span>}
            </div>
            <span className="text-green-400">${p.money}</span>
          </div>
        ))}
      </div>

      {/* Bankrupt Button */}
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full text-sm font-semibold">
        🚩 Bankrupt
      </button>

      {/* Trade section */}
      <div className="bg-[#2d2138] p-3 rounded-md">
        <h3 className="font-semibold mb-2">Trades</h3>
        <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-sm">
          ➕ Create
        </button>
      </div>

      {/* My Properties */}
      <div className="bg-[#2d2138] p-3 rounded-md flex-1">
        <h3 className="font-semibold mb-2">My properties (0)</h3>
        <p className="text-sm text-gray-400">No properties yet</p>
      </div>
    </div>
  );
}

export default RoomRight
