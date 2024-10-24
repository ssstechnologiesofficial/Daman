import React, { useState } from "react";
import ThirtySec from "./ThirtySec";
import OneMin from "./OneMin";
import ThreeMin from "./ThreeMin";
import FiveMin from "./FiveMin";

const WinGo = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "30S":
        return <ThirtySec />;
      case "1M":
        return <OneMin />;
      case "3M":
        return <ThreeMin />;
      case "5M":
        return <FiveMin />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 min-h-screen w-full  items-center mt-20  ">
      <div className="w-full rounded bg-darkSidebar p-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-8 gap-2">
          {/* Card 30sec */}
          <div
            className="flex items-center cursor-pointer col-span-2"
            onClick={() => handleTabClick("30S")}
          >
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div
                className="bg-orange-400 flex items-center justify-center rounded shadow-lg"
                style={{ width: "50px", height: "45px" }}
              >
                <h2 className="text-white text-2xl font-semibold">30S</h2>
              </div>
              <p className="text-white ml-4">WinGO 30 sec</p>
            </div>
          </div>

          {/* Card 1min */}
          <div
            className="flex items-center cursor-pointer col-span-2"
            onClick={() => handleTabClick("1M")}
          >
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div
                className="bg-orange-400 flex items-center justify-center rounded shadow-lg"
                style={{ width: "50px", height: "45px" }}
              >
                <h2 className="text-white text-2xl font-semibold">1M</h2>
              </div>
              <p className="text-white ml-4">WinGO 1 min</p>
            </div>
          </div>

          {/* Card 3min */}
          <div
            className="flex items-center cursor-pointer col-span-2"
            onClick={() => handleTabClick("3M")}
          >
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div
                className="bg-orange-400 flex items-center justify-center rounded shadow-lg"
                style={{ width: "50px", height: "45px" }}
              >
                <h2 className="text-white text-2xl font-semibold">3M</h2>
              </div>
              <p className="text-white ml-4">WinGO 3 min</p>
            </div>
          </div>

          {/* Card 5min */}
          <div
            className="flex items-center cursor-pointer col-span-2"
            onClick={() => handleTabClick("5M")}
          >
            <div className="bg-darkSidebar shadow-md p-4 rounded flex items-center w-full">
              <div
                className="bg-orange-400 flex items-center justify-center rounded shadow-lg"
                style={{ width: "50px", height: "45px" }}
              >
                <h2 className="text-white text-2xl font-semibold">5M</h2>
              </div>
              <p className="text-white ml-4">WinGO 5 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-2 me-9">{renderActiveComponent()}</div>
    </div>
  );
};

export default WinGo;
