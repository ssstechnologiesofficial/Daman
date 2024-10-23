import React from 'react';
import StaticGameCards from './StaticGameCards';
import dragenbg from '../../public/Image/bj-0907ace0.png';
import dragenlogo from '../../public/Image/dragon.png';

const GamesImg = {
  GamesName: ['Win Go', 'K3', '5D', 'Win Go'],
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

const Popular = () => {
  return (
    <div className="w-full relative">
      <div className="flex justify-between w-full">
        <p className="font-extrabold text-lg opacity-80 ms-3 border-l-4 ps-2 border-red-500">
          Lottery
        </p>
        <button className="border text-sm border-black px-8 border-opacity-70 rounded-lg">
          All <span className="text-red-500">4</span>
        </button>
      </div>

      <div className="grid grid-cols-2 mt-2">
        {GamesImg.bgLottery.map((bgSrc, index) => (
          <div key={index} className="relative">
            <img
              src={bgSrc}
              alt={`Lottery Background ${index}`}
              className="w-full"
            />
            <div className="absolute grid text-center bottom-0 left-0 p-2">
              <p className="text-white relative top-2 font-bold text-xl">
                {GamesImg.GamesName[index]}
              </p>

              <img
                src={GamesImg.imgs[index]}
                alt={`Game ${index}`}
                className="w-32 ms-7" // Adjust width as necessary
              />
              <button className="font-extrabold w-10 text-center flex items-center justify-center text-lg ms-20  mb-4 text-white border rounded-full px-12  border-white">
                {'Go>'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full mb-8 px-2">
        <img src={dragenbg} alt="Dragon Background" className="w-full" />

        <div className="absolute flex items-center justify-center -top-7 text-white">
          <img
            src={dragenlogo}
            alt="Dragon Logo"
            className="w-28 p-1 object-contain mt-4"
          />

          <div className="flex flex-col justify-center items-start ms-3">
            <h4 className="font-extrabold text-lg pt-8">
              Win Go Dragon Assistant
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

      <div className="relative w-full px-2">
        <StaticGameCards />
      </div>
    </div>
  );
};

export default Popular;
