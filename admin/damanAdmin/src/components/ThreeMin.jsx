import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ThreeMin = () => {
  return (
    <div className=' w-full p-4 flex-col'>
    <div className='w-full p-2 '> {/* Wrapper div added */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-start"> {/* Increased gap for cards */}
        
        {/* Card 30sec */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full"> {/* Reduced padding */}
            <div className="bg-red-500 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}> {/* Reduced icon size */}
              <FaShoppingCart className="text-white text-xl" /> {/* Reduced icon size */}
            </div>
            <div className="flex flex-col ml-4"> {/* Flex container for vertical alignment */}
              <p className="text-white text-base">Join Red</p> {/* Reduced text size */}
              <p className="text-white text-base">0</p> {/* Reduced text size */}
            </div>
          </div>
        </div>

        {/* Card 1min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-violet-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
              <FaShoppingCart className="text-white text-xl" />
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join Violet</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 3min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-green-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
              <FaShoppingCart className="text-white text-xl" />
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join Green</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 5min */}
        <div className="flex items-center cursor-pointer w-full">
<div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
  <div className="bg-blue-400 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
    <FaShoppingCart className="text-white text-xl" />
  </div>
  <div className="flex flex-col ml-4 items-center"> {/* Kept flex-col for vertical alignment */}
    <p className="text-white text-base">Total Amount</p> {/* Text centered */}
    <p className="text-white text-base">0</p> {/* Value centered below text */}
  </div>
</div>
</div>


      </div>
    </div>
    <div className='w-full p-2 '> {/* Wrapper div added */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-start"> {/* Increased gap for cards */}
        
        {/* Card 30sec */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full"> {/* Reduced padding */}
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}> {/* Reduced icon size */}
            <h2 className="text-white text-lg font-semibold">0</h2> {/* Reduced icon size */}
            </div>
            <div className="flex flex-col ml-4"> {/* Flex container for vertical alignment */}
              <p className="text-white text-base">Join 0</p> {/* Reduced text size */}
              <p className="text-white text-base">0</p> {/* Reduced text size */}
            </div>
          </div>
        </div>

        {/* Card 1min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">1</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 1</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 3min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">2</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 2</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 5min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">3</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 3</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full p-2 '> {/* Wrapper div added */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-start"> {/* Increased gap for cards */}
        
        {/* Card 30sec */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full"> {/* Reduced padding */}
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}> {/* Reduced icon size */}
            <h2 className="text-white text-xl font-semibold">4</h2> {/* Reduced icon size */}
            </div>
            <div className="flex flex-col ml-4"> {/* Flex container for vertical alignment */}
              <p className="text-white text-base">Join 4</p> {/* Reduced text size */}
              <p className="text-white text-base">0</p> {/* Reduced text size */}
            </div>
          </div>
        </div>

        {/* Card 1min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">5</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 5</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 3min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">6</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 6</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 5min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">7</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 7</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full p-2 '> {/* Wrapper div added */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-start"> {/* Increased gap for cards */}
        
        {/* Card 30sec */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full"> {/* Reduced padding */}
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}> {/* Reduced icon size */}
            <h2 className="text-white text-xl font-semibold">8</h2> {/* Reduced icon size */}
            </div>
            <div className="flex flex-col ml-4"> {/* Flex container for vertical alignment */}
              <p className="text-white text-base">Join 8</p> {/* Reduced text size */}
              <p className="text-white text-base">0</p> {/* Reduced text size */}
            </div>
          </div>
        </div>

        {/* Card 1min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">9</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join 9</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 3min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">B</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join Big</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>

        {/* Card 5min */}
        <div className="flex items-center cursor-pointer w-full">
          <div className="bg-darkSidebar shadow-custom p-4 rounded flex items-center w-full">
            <div className="bg-blue-600 flex items-center justify-center rounded shadow-lg" style={{ width: '50px', height: '45px' }}>
            <h2 className="text-white text-xl font-semibold">S</h2>
            </div>
            <div className="flex flex-col ml-4"> 
              <p className="text-white text-base">Join Small</p>
              <p className="text-white text-base">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
};

export default ThreeMin;
