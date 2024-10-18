import React from 'react'

const WinGo = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* Card 1M */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">1M</h2>
          </div>
          <p className="text-white mt-2">WinGO 1 min</p>
        </div>

        {/* Card 3M */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">3M</h2>
          </div>
          <p className="text-white mt-2">WinGO 3 min</p>
        </div>

        {/* Card 5M */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">5M</h2>
          </div>
          <p className="text-white mt-2">WinGO 5 min</p>
        </div>

        {/* Card 10M */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">10M</h2>
          </div>
          <p className="text-white mt-2">WinGO 10 min</p>
        </div>
      </div>
    </div>
  )
}

export default WinGo;
