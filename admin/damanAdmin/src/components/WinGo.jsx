import React, { useState } from 'react';
import ThirtySec from './ThirtySec';
import OneMin from './OneMin';   
import ThreeMin from './ThreeMin';
import FiveMin from './FiveMin';

const WinGo = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case '30S':
        return <ThirtySec />;
      case '1M':
        return <OneMin />;
      case '3M':
        return <ThreeMin />;
      case '5M':
        return <FiveMin />;
      default:
        return null;
    }
  };

  return (
    <div className='p-4 min-h-screen flex flex-col items-center bg-bodyCustom mt-16'> {/* Added mt-16 */}
      <div className="w-full bg-darkSidebar p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"> {/* Reduced gap */}
          {/* Card 30sec */}
          <div className="flex items-center cursor-pointer w-full" onClick={() => handleTabClick('30S')}>
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full"> {/* Increased padding for width */}
              <div className="bg-orange-400 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
                <h2 className="text-white text-xl font-semibold">30S</h2>
              </div>
              <p className="text-white ml-4">WinGO 30 sec</p> {/* Increased margin for left space */}
            </div>
          </div>

          {/* Card 1min */}
          <div className="flex items-center cursor-pointer w-full" onClick={() => handleTabClick('1M')}>
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div className="bg-orange-400 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
                <h2 className="text-white text-lg font-semibold">1M</h2>
              </div>
              <p className="text-white ml-4">WinGO 1 min</p>
            </div>
          </div>

          {/* Card 3min */}
          <div className="flex items-center cursor-pointer w-full" onClick={() => handleTabClick('3M')}>
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div className="bg-orange-400 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
                <h2 className="text-white text-lg font-semibold">3M</h2>
              </div>
              <p className="text-white ml-4">WinGO 3 min</p>
            </div>
          </div>

          {/* Card 5min */}
          <div className="flex items-center cursor-pointer w-full" onClick={() => handleTabClick('5M')}>
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div className="bg-orange-400 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
                <h2 className="text-white text-lg font-semibold">5M</h2>
              </div>
              <p className="text-white ml-4">WinGO 5 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-2 me-9 ">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default WinGo;
