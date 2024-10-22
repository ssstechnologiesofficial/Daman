import React, {useState}from 'react';
import { Link,Outlet } from 'react-router-dom';
import { HiUser } from "react-icons/hi2";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiGiftFill } from "react-icons/ri";
import Navbar from '../components/Navbar';



const Sidebar = () => {
  return (
    <div className='flex'>
    <div className='w-64 bg-darkSidebar fixed h-full px-4 py-2 shadow-custom text-grayCustom font-bold text-base font-normal leading-relaxed  text-left'>
        <div className='my-2 mb-4 flex items-center border-b-[2px] border-solid border-[#c3c7d0] pb-4'>
        <div className="flex  items-center justify-center rounded-full shadow mr-4 bg-blue-600" > 
        <HiUser className="fa-solid w-7 h-7" />

        </div>
          <h3 className=''>Admin</h3>
        </div>
        <ul className='mt-5'>
            {/* <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaTachometerAlt className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Wingo
              </a>
            </li> */}

                 <Link to ="winGo" className='px-3 mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>

                <FaTachometerAlt className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Wingo
                
              
            </Link>


            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaTachometerAlt className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                5D
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaTachometerAlt className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                K3
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
              <  FaUserCircle className='inline-block w-6 h-6 mr-2 -mt-2' />
                Members
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaUsers className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Collaborator
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                < FaChartPie className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                 Create Collaborator
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaCreditCard className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Browse Recharge
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                < FaUniversity className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Browse Withdrawal
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaCogs className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Level Setting
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <FaCogs className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Created Salary
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <  MdOutlineFormatListBulleted className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Recharge (Approved)
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                < MdOutlineFormatListBulleted className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Withdrawal (Approved)
              </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
              <a href="" className='px-3'>
                <RiGiftFill className='inline-block w-6 h-6 mr-2 -mt-2'/> 
                Create Giftcode
              </a>
            </li>
        </ul>

    </div>

    
    <div className='flex-grow ps-64'>
      <main className='flex-grow'>
      <Navbar/>
        <div><Outlet></Outlet></div>
      </main>
    </div>
   
    </div>
   
    
  );
};

export default Sidebar
