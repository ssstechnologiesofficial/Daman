import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Tapbar from './Tapbar';

const images = [
  '../../public/Image/Banner/Banner1.png',
  '../../public/Image/Banner/Banner2.png',
  '../../public/Image/Banner/Banner3.png',
  '../../public/Image/Banner/Banner4.png',
  '../../public/Image/Banner/Banner5.png',
  '../../public/Image/Banner/Banner6.jpg',
  '../../public/Image/Banner/Banner7.png',
  '../../public/Image/Banner/Banner8.png',
  '../../public/Image/Banner/Banner9.jpg',
  '../../public/Image/Banner/Banner10.png',
];

const textMessages = [
  'Welcome to our site!',
  'Explore our latest features.',
  'Check out our new products.',
  'Stay tuned for updates!',
  "Don't miss our special offers.",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Hide the text before changing
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textMessages.length);
        setShowText(true); // Show the new text after it has changed
      }, 500); // Time to wait before showing new text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className=" top-0 left-0 right-0 z-20 sticky">
        <Navbar />
      </div>
      <div className="flex-grow overflow-auto">
        <div className="px-3 relative">
          <div className="slider rounded-full">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[175px] rounded-lg" // Tailwind for consistent styling
            />
          </div>

          <div className="relative flex items-center mt-2 w-90 h-12 border bg-white rounded-3xl">
            <div className="ms-2">
              <img
                className="w-[24px] object-contain"
                src="../../public/Image/nitificationspeaker.png"
                alt="Notification Icon"
              />
            </div>
            <div className="flex-grow h-full pl-2 pt-1 text-center justify-center items-center">
              <div
                className={`transition-transform duration-500 ease-in-out transform mt-1 ${
                  showText ? 'translate-y-0' : 'translate-y-2 opacity-0'
                }`}
              >
                {textMessages[currentIndex]}
              </div>
            </div>
            <input
              type="submit"
              className="text-white h-[30px] rounded-3xl me-3 text-center font-semibold text-xs bg-red-400 px-5 cursor-pointer disabled:opacity-50"
              value="Detail"
            />
          </div>
        </div>
      </div>

      <div className="bottom-0 left-0 right-0 z-20 sticky">
        <Tapbar />
      </div>
    </div>
  );
};

export default Home;
