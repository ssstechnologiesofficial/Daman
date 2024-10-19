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
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* Card 30sec */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleTabClick('30S')}>
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">30S</h2>
          </div>
          <p className="text-white mt-2">WinGO 30 sec</p>
        </div>

        {/* Card 1min*/}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleTabClick('1M')}>
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">1M</h2>
          </div>
          <p className="text-white mt-2">WinGO 1 min</p>
        </div>

        {/* Card 3min*/}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleTabClick('3M')}>
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">3M</h2>
          </div>
          <p className="text-white mt-2">WinGO 3 min</p>
        </div>

        {/* Card 5min */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleTabClick('5M')}>
          <div className="bg-orange-500 p-4 rounded shadow-lg">
            <h2 className="text-white text-lg font-semibold">5M</h2>
          </div>
          <p className="text-white mt-2">WinGO 5 min</p>
        </div>
      </div>

      {/* Content Display Area */}
      <div className="mt-4">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default WinGo;
