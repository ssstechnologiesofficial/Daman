// import React from 'react';
// import popular from '../../public/Image/popular.png';
// import lottery from '../../public/Image/lottery.png';
// import casino from '../../public/Image/casino.png';
// import sport from '../../public/Image/sport.png';
// import slot from '../../public/Image/slot.png';
// import rummy from '../../public/Image/rummy.png';
// import fish from '../../public/Image/fish.png';
// import original from '../../public/Image/original.png';

// import popularIcon from '../../public/Image/gamecategory_20240412114829pq18.png';
// import lotteryIcon from '../../public/Image/gamecategory_20240412114947sy3o.png';
// import casinoIcon from '../../public/Image/gamecategory_20240412114911i998.png';
// import sportIcon from '../../public/Image/gamecategory_20240412114921c1tg.png';
// import slotIcon from '../../public/Image/gamecategory_20240412114929rkd9.png';
// import rummyIcon from '../../public/Image/gamecategory_2024041211490142rl.png';
// import fishIcon from '../../public/Image/gamecategory_20240412114848em94.png';
// import originalIcon from '../../public/Image/gamecategory_20240412114937mcis.png';

// const Gameoptions = () => {
//   return (
//     <div className="flex flex-col justify-center items-center w-full flex-grow">
//       <div className="flex">
//         <GameItem image={popular} icon={popularIcon} text="Popular" index={1} />
//         <GameItem image={lottery} icon={lotteryIcon} text="Lottery" index={2} />
//       </div>
//       <div className="flex">
//         <GameItem image={casino} icon={casinoIcon} text="Casino" index={3} />
//         <GameItem image={slot} icon={slotIcon} text="Slot" index={4} />
//         <GameItem image={sport} icon={sportIcon} text="Sports" index={5} />
//       </div>
//       <div className="flex">
//         <GameItem image={rummy} icon={rummyIcon} text="Rummy" index={6} />
//         <GameItem image={fish} icon={fishIcon} text="Fishing" index={7} />
//         <GameItem
//           image={original}
//           icon={originalIcon}
//           text="Original"
//           index={8}
//         />
//       </div>
//     </div>
//   );
// };

// const GameItem = ({ image, icon, text, index }) => {
//   // Adjust styles based on index
//   const textPosition0 = index >= 1 && index <= 2 ? ' left-36' : 'top-10';
//   const textPosition =
//     index >= 3 && index <= 5 ? 'left-20 ms-2' : 'top-1 '; // Example positions
//   const textPosition2 = index >= 6 && index <= 8 ? 'top-14 left-20' : 'top-10';
//   return (
//     <div className="relative">
//       <img src={image} alt={text} className="w-56 h-full object-cover" />
//       <div>
//         <img
//           src={icon}
//           alt={`${text} Icon`}
//           className="absolute top-3 left-2 w-[100px] "
//         />
//         <p
//           className={`absolute ${textPosition}  ${textPosition0} ${textPosition2} text-center text-sm font-bold text-white`}
//         >
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Gameoptions;

import React from 'react';
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
  return (
    <div className="flex flex-col justify-center items-center w-full flex-grow">
      <div className="flex">
        <GameItem image={popular} icon={popularIcon} text="Popular" index={1} />
        <GameItem image={lottery} icon={lotteryIcon} text="Lottery" index={2} />
      </div>
      <div className="flex">
        <GameItem image={casino} icon={casinoIcon} text="Casino" index={3} />
        <GameItem image={slot} icon={slotIcon} text="Slot" index={4} />
        <GameItem image={sport} icon={sportIcon} text="Sports" index={5} />
      </div>
      <div className="flex">
        <GameItem image={rummy} icon={rummyIcon} text="Rummy" index={6} />
        <GameItem image={fish} icon={fishIcon} text="Fishing" index={7} />
        <GameItem
          image={original}
          icon={originalIcon}
          text="Original"
          index={8}
        />
      </div>
    </div>
  );
};

const GameItem = ({ image, icon, text, index }) => {
  // Adjust styles based on index
  const textPosition = index >= 3 && index <= 5 ? 'top-3' : 'top-10'; // Positions for cards 3, 4, 5 at the top
  const leftPosition =
    index === 3
      ? 'left-20'
      : index === 4
      ? 'left-24'
      : index === 5
      ? 'left-20'
      : 'left-10'; // Customize left position based on index

  return (
    <div className="relative">
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
