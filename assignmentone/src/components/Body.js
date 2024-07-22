import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useDispatch } from "react-redux";
import { addCustomerData } from "../utils/dataSlice";
import useGetData from "../utils/useGetData";

const Body = () => {
  useGetData();
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <MainContent />
      </div>
    </div>
  );
};

export default Body;
