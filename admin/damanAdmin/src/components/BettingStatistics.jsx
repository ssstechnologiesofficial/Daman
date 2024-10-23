import React from 'react'

const BettingStatistics = () => {
  return (
    <div className="p-6 bg-gray-800 text-white">
          <h2 className="text-xl font-bold mb-4">Betting Statistics</h2>
    
          {/* Betting Stats Rows */}
          <div className="space-y-3">
            {/* Single Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Avatar/Icon */}
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-gray-600">
                  <span>O</span> {/* Avatar or icon */}
                </div>
                {/* Label */}
                <div className="ml-3 text-white text-sm">Join 2 10</div>
              </div>
              {/* Bar */}
              <div className="flex-1 mx-4 bg-gray-600 h-5 rounded">
                <div className="bg-blue-500 h-5 rounded" style={{ width: '70%' }}></div>
              </div>
              {/* Time */}
              <div className="text-gray-400 text-sm">2024-03-19 3:07:10 PM</div>
            </div>
    
            {/* Single Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-gray-600">
                  <span>O</span>
                </div>
                <div className="ml-3 text-white text-sm">Join Big 10</div>
              </div>
              <div className="flex-1 mx-4 bg-gray-600 h-5 rounded">
                <div className="bg-yellow-500 h-5 rounded" style={{ width: '90%' }}></div>
              </div>
              <div className="text-gray-400 text-sm">2024-03-19 3:07:18 PM</div>
            </div>
    
            {/* Single Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-gray-600">
                  <span>O</span>
                </div>
                <div className="ml-3 text-white text-sm">Join Small 1</div>
              </div>
              <div className="flex-1 mx-4 bg-gray-600 h-5 rounded">
                <div className="bg-green-500 h-5 rounded" style={{ width: '50%' }}></div>
              </div>
              <div className="text-gray-400 text-sm">2024-03-19 3:07:22 PM</div>
            </div>
    
            {/* Single Stat */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center text-gray-600">
                  <span>O</span>
                </div>
                <div className="ml-3 text-white text-sm">Join 5 1</div>
              </div>
              <div className="flex-1 mx-4 bg-gray-600 h-5 rounded">
                <div className="bg-blue-500 h-5 rounded" style={{ width: '60%' }}></div>
              </div>
              <div className="text-gray-400 text-sm">2024-03-19 3:07:29 PM</div>
            </div>
          </div>
        </div>
    
    
    
    

  

);
    };
    
export default BettingStatistics;