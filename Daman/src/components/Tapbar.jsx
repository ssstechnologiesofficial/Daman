import React from 'react';
import Tapbar_bar from '../../public/Image/Tabbar/tabbar.png';
// import homeIcon from '../../public/Image/Tabbar/home.png';
// import activityIcon from '../../public/Image/Tabbar/activity.png';
// import promotionIcon from '../../public/Image/Tabbar/promotion.png';
// import walletIcon from '../../public/Image/Tabbar/wallet.png';
// import accountIcon from '../../public/Image/Tabbar/account.png';

const Tapbar = () => {
  return (
    <div className="flex w-full items-center relative bottom-0">
      <img src={Tapbar_bar} alt="Tab bar background" className="w-full" />
      <div className="flex flex-grow justify-between items-center ms-4 absolute w-full mt-3">
        <div>
          <img alt="Home" />
          <p className="text-sm font-semibold opacity-80">Home</p>
        </div>
        <div>
          <img alt="Activity" />
          <p className="text-sm font-semibold opacity-80">Activity</p>
        </div>
        <div className="">
          <div className="h-16  w-16 border-2 border-white rounded-full -translate-y-2 -translate-x-1 bg-gradient-to-r from-red-500 to-red-300">
            <img alt="Promotion" />
          </div>
          <p className="text-sm font-semibold opacity-80 mb-7 pe-3">
            Promotion
          </p>
        </div>
        <div>
          <img alt="Wallet" />
          <p className="text-sm font-semibold opacity-80">Wallet</p>
        </div>
        <div>
          <img alt="Account" />
          <p className="text-sm font-semibold opacity-80">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Tapbar;
