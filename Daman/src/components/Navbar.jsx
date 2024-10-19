import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b w-full bg-white">
        <div className="w-[115px] object-contain py-1">
          <img src="../../public/Image/damanRlogo.png" />
        </div>
        <div>Notify</div>
      </div>
    </>
  );
};

export default Navbar;
