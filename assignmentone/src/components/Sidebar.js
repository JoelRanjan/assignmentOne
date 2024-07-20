import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiNews } from "react-icons/bi";
import { RiLogoutCircleFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="p-2 m-2 w-48">
      <ul className="font-semibold ">
        <li className="flex m-2">
          <FaTruckArrowRight className=" mr-1 size-6" />
          <p className="text-sm">MY MOVES</p>
        </li>
        <li className="flex m-2">
          <CgProfile className=" mr-1 size-6" />
          <p className="text-sm">MY PROFILE</p>
        </li>
        <li className="flex m-2">
          <BiNews className=" mr-1 size-6" />
          <p className="text-sm">GET QUOTE</p>
        </li>
        <li className="flex m-2">
          <RiLogoutCircleFill className=" mr-1 size-6" />
          <p className="text-sm">LOG OUT</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
