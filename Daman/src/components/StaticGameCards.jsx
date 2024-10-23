import React from 'react';

const StaticGameCards = () => {
  const StaticGameCardsdata = [
    {
      id: 1,
      name: 'Original',
      no: 35,
      bgcard: '../../public/Image/daman-lottery.png',
      gameCimg: [
        '../../public/Image/StaticGame/800.png',
        '../../public/Image/StaticGame/810_20240830182104829.png',
        '../../public/Image/StaticGame/110.png',
        '../../public/Image/StaticGame/22001.png',
        '../../public/Image/StaticGame/22004.png',
        '../../public/Image/StaticGame/235.png',
      ],
    },
    {
      id: 2,
      name: 'Platform recommendation',
      no: 6,
      gameCimg: [
        '../../public/Image/StaticGame/800.png',
        '../../public/Image/StaticGame/7006.png',
        '../../public/Image/StaticGame/harlecoin0000000.png',
        '../../public/Image/StaticGame/kitchendrqfrenzy.png',
        '../../public/Image/StaticGame/warofgods0000000.png',
        '../../public/Image/StaticGame/8910 (1).png',
      ],
    },
    {
      id: 3,
      name: 'Slots',
      no: 8,
      gameCimg: [
        '../../public/Image/StaticGame/vendorlogo_2024011618151716a4.png',
        '../../public/Image/StaticGame/vendorlogo_202401161814358lat.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181633lq6j.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181623alci.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181611q84s.png',
        '../../public/Image/StaticGame/vendorlogo_202401161815076psg.png',
      ],
    },
    {
      id: 4,
      name: 'Sports',
      no: 4,
      gameCimg: [
        '../../public/Image/StaticGame/vendorlogo_20240116181202hhjt.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181151vd4w.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181140kbrq.png',
        '../../public/Image/StaticGame/vendorlogo_20240116181011v5fb.png',
      ],
    },
    {
      id: 5,
      name: 'Casino',
      no: 29,
      gameCimg: [
        '../../public/Image/StaticGame/CrazyTime0000001.png',
        '../../public/Image/StaticGame/AmericanTable001.png',
        '../../public/Image/StaticGame/48z5pjps3ntvqc1b.png',
        '../../public/Image/StaticGame/AndarBahar000001.png',
        '../../public/Image/StaticGame/ROU_EN.png',
        '../../public/Image/StaticGame/BacBo00000000001.png',
      ],
    },
    {
      id: 6,
      name: 'Fishing',
      no: 29,
      bgcard: '../../public/Image/daman-lottery.png',
      gameCimg: [
        '../../public/Image/StaticGame/AB3.png',
        '../../public/Image/StaticGame/AT01.png',
        '../../public/Image/StaticGame/AT05.png',
        '../../public/Image/StaticGame/GO02.png',
        '../../public/Image/StaticGame/7001.png',
        '../../public/Image/StaticGame/7002.png',
      ],
    },
    {
      id: 7,
      name: 'Rummy',
      no: 2,
      gameCimg: [
        '../../public/Image/StaticGame/Rummmy1.png',
        '../../public/Image/StaticGame/Rummy2.png',
      ],
    },
  ];

  return (
    <>
      {StaticGameCardsdata.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="flex justify-between w-full mb-2 mt-8">
            <p className="font-extrabold text-lg opacity-80 border-l-4 ps-2 border-red-500">
              {item.name}
            </p>
            <button className="border text-sm border-black px-8 font-bold text-opacity-20 border-opacity-50 rounded-lg">
              All <span className="text-red-500"> {item.no}</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {item.gameCimg.map((imgSrc, index) => (
              <div
                key={index}
                className={`h-48 flex justify-center items-center rounded-2xl ${
                  item.id === 1 || item.id === 6 ? 'relative' : ''
                }`}
                style={{
                  backgroundImage:
                    item.id === 1 || item.id === 6
                      ? `url(${item.bgcard})`
                      : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  paddingBottom: '10px',
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Game Image ${index}`}
                  className={`flex justify-center rounded-lg ${
                    item.id === 1 || item.id === 6 ? 'bg-opacity-100' : ''
                  }`}
                  style={{
                    width: '100%', // Maintain width
                    height: '100%', // Maintain height
                    objectFit: item.id === 6 ? 'fill' : 'fill', // Conditional object-fit
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default StaticGameCards;
