import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import {
  FaTachometerAlt,
  FaUserCircle,
  FaUsers,
  FaChartPie,
  FaCreditCard,
  FaUniversity,
  FaCogs,
} from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiGiftFill } from "react-icons/ri";
import Navbar from "../components/Navbar";

function Sidebar() {
  return (
    <div className="flex w-full ">
      {/* Sidebar */}
      <div className="w-64 bg-darkSidebar leading-relaxed fixed h-full px-3 py-2 shadow-custom text-grayCustom font-bold text-lg font-normal text-left">
        <div className="my-3 px-2 mb-4 flex items-center border-b-[1px] border-solid border-grayCustom pb-4">
          <div className="flex items-center justify-center rounded-full shadow-custom text-white mr-3  bg-blue-400 w-8 h-8">
            {" "}
            {/* Set width and height for the rounded div */}
            <HiUser className="fa-solid w-7 h-7" /> {/* Increased icon size */}
          </div>
          <h3 className="text-xl">Admin</h3> {/* Increased text size */}
        </div>

        {/* Navigation Links */}
        <ul className="mt-5 ">
          {[
            {
              path: "/winGo",
              icon: <FaTachometerAlt className="w-6 h-6" />,
              label: "Wingo",
            },
            {
              path: "/5D",
              icon: <FaTachometerAlt className="w-6 h-6" />,
              label: "5D",
            },
            {
              path: "/K3",
              icon: <FaTachometerAlt className="w-6 h-6" />,
              label: "K3",
            },
            {
              path: "/members",
              icon: <FaUserCircle className="W-6 h-6" />,
              label: "Members",
            },
            {
              path: "/collaborator",
              icon: <FaUsers className="w-6 h-6" />,
              label: "Collaborator",
            },
            {
              path: "/create-collaborator",
              icon: <FaChartPie className="w-6 h-6" />,
              label: "Create Collaborator",
            },
            {
              path: "/browse-recharge",
              icon: <FaCreditCard className="w-6 h-6" />,
              label: "Browse Recharge",
            },
            {
              path: "/browse-withdrawal",
              icon: <FaUniversity className="w-6 h-6" />,
              label: "Browse Withdrawal",
            },
            {
              path: "/level-setting",
              icon: <FaCogs className="w-6 h-6" />,
              label: "Level Setting",
            },
            {
              path: "/created-salary",
              icon: <FaCogs className="w-6 h-6" />,
              label: "Created Salary",
            },
            {
              path: "/recharge-approved",
              icon: <MdOutlineFormatListBulleted className="w-6 h-6" />,
              label: "Recharge (Approved)",
            },
            {
              path: "/withdrawal-approved",
              icon: <MdOutlineFormatListBulleted className="w-6 h-6" />,
              label: "Withdrawal (Approved)",
            },
            {
              path: "/create-giftcode",
              icon: <RiGiftFill className="w-6 h-6" />,
              label: "Create Giftcode",
            },
          ].map(({ path, icon, label }) => (
            <li key={path} className="mb-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded transition-all duration-200 ${
                    isActive ? "bg-[#007bff] text-white" : "hover:bg-gray-600"
                  }`
                }
              >
                {icon}
                <span className="ml-3 text-lg">{label}</span>{" "}
                {/* Increased text size */}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow ps-64">
        <main className="flex-grow">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
