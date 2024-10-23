import React, { useState } from 'react';
import Popular from './Popular';
import Lottery from './Lottery';

import popular from '../../public/Image/popular.png';
import lottery from '../../public/Image/lottery.png';
import casino from '../../public/Image/casino.png';
import sport from '../../public/Image/sport.png';
import slot from '../../public/Image/slot.png';
import rummy from '../../public/Image/rummy.png';
import fish from '../../public/Image/fish.png';
import original from '../../public/Image/original.png';

import popularIcon from '../../public/Image/gamecategory_20240412114829pq18.png';
import lotteryIcon from '../../public/Image/gamecategory_20240412114947sy3o.png';
import casinoIcon from '../../public/Image/gamecategory_20240412114911i998.png';
import sportIcon from '../../public/Image/gamecategory_20240412114921c1tg.png';
import slotIcon from '../../public/Image/gamecategory_20240412114929rkd9.png';
import rummyIcon from '../../public/Image/gamecategory_2024041211490142rl.png';
import fishIcon from '../../public/Image/gamecategory_20240412114848em94.png';
import originalIcon from '../../public/Image/gamecategory_20240412114937mcis.png';

const Gameoptions = () => {
  const [selectedGame, setSelectedGame] = useState('Popular');

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full flex-grow">
        <div className="flex">
          <GameItem
            image={popular}
            icon={popularIcon}
            text="Popular"
            index={1}
            onClick={() => handleGameSelect('Popular')}
          />
          <GameItem
            image={lottery}
            icon={lotteryIcon}
            text="Lottery"
            index={2}
            onClick={() => handleGameSelect('Lottery')}
          />
        </div>
        <div className="flex">
          <GameItem
            image={casino}
            icon={casinoIcon}
            text="Casino"
            index={3}
            onClick={() => handleGameSelect('Casino')}
          />
          <GameItem
            image={slot}
            icon={slotIcon}
            text="Slot"
            index={4}
            onClick={() => handleGameSelect('Slot')}
          />
          <GameItem
            image={sport}
            icon={sportIcon}
            text="Sports"
            index={5}
            onClick={() => handleGameSelect('Sports')}
          />
        </div>
        <div className="flex">
          <GameItem
            image={rummy}
            icon={rummyIcon}
            text="Rummy"
            index={6}
            onClick={() => handleGameSelect('Rummy')}
          />
          <GameItem
            image={fish}
            icon={fishIcon}
            text="Fishing"
            index={7}
            onClick={() => handleGameSelect('Fishing')}
          />
          <GameItem
            image={original}
            icon={originalIcon}
            text="Original"
            index={8}
            onClick={() => handleGameSelect('Original')}
          />
        </div>
        <div className="w-full px-1">
          {/* Conditional rendering of the selected game component */}
          {selectedGame === 'Popular' && <Popular />}
          {selectedGame === 'Lottery' && <Lottery />}
        </div>
      </div>
    </>
  );
};

const GameItem = ({ image, icon, text, index, onClick }) => {
  const textPosition =
    index === 1
      ? 'top-12 ms-3'
      : index === 2
      ? 'top-12 ms-3'
      : index === 3
      ? 'top-2'
      : index === 4
      ? 'top-2'
      : index === 5
      ? 'top-2'
      : index === 6
      ? 'top-12'
      : index === 7
      ? 'top-12'
      : index === 8
      ? 'top-12'
      : 'top-12'; // Positions for cards 3, 4, 5 at the top
  const leftPosition =
    index === 1
      ? 'left-32'
      : index === 2
      ? 'left-32'
      : index === 3
      ? 'left-20'
      : index === 4
      ? 'left-24'
      : index === 5
      ? 'left-20'
      : index === 6
      ? 'left-20'
      : index === 7
      ? 'left-20'
      : index === 8
      ? 'left-16 ms-2'
      : 'left-10'; // Customize left position based on index

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <img src={image} alt={text} className="w-56 h-full object-cover" />
      <div>
        <img
          src={icon}
          alt={`${text} Icon`}
          className="absolute top-3 left-2 w-[100px]"
        />
        <p
          className={`absolute ${textPosition} ${leftPosition} text-center text-sm font-bold text-white`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Gameoptions;
