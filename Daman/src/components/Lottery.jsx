import React from 'react';
import dragenbg from '../../public/Image/bj-0907ace0.png';
import dragenlogo from '../../public/Image/dragon.png';

const GamesImg = {
  imgs: [
    '../../public/Image/wingo.png',
    '../../public/Image/k3.png',
    '../../public/Image/5D.png',
    '../../public/Image/trxwingo.png',
  ],
  bgLottery: [
    '../../public/Image/daman-lottery.png',
    '../../public/Image/daman-lottery.png',
    '../../public/Image/daman-lottery.png',
    '../../public/Image/daman-lottery.png',
  ],
};

const Lottery = () => {
  return (
    <div className="w-full relative">
      <div className="font-bold text-lg opacity-80 mb-4">Lottery</div>

      <div className="relative w-full mb-8">
        <img src={dragenbg} alt="Dragon Background" className="w-full" />

        <div className="absolute flex items-center justify-center -top-7 text-white">
          <img
            src={dragenlogo}
            alt="Dragon Logo"
            className="w-28 p-1 object-contain mt-4"
          />

          <div className="flex flex-col justify-center items-start ms-3">
            <h4 className="font-extrabold text-lg pt-8">
              Win Go Dragon assistant
            </h4>
            <p className="rounded-full bg-red-500 text-xs text-justify font-bold px-4 py-2 mt-1">
              Five draws in a row with the same result
            </p>
            <button className="rounded-full px-9 bg-gradient-to-t from-yellow-600 to-yellow-300 py-1 text-white font-semibold mt-2">
              Enter
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between absolute w-full">
        <p>Lottery</p>
        <div>All</div>
      </div>

      {/* Render Lottery Backgrounds and Game Images */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {' '}
        {/* Use grid for card layout */}
        {GamesImg.bgLottery.map((bgSrc, index) => (
          <div key={index} className="relative">
            <img
              src={bgSrc}
              alt={`Lottery Background ${index}`}
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 p-2">
              <img
                src={GamesImg.imgs[index]}
                alt={`Game ${index}`}
                className="w-16" // Adjust width as necessary
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lottery;
