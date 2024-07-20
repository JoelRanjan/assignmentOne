import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useDispatch } from "react-redux";
import { addCustomerData } from "../utils/dataSlice";

const Body = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch("http://test.api.boxigo.in/sample-data/ ");
    const jsonData = await data.json();
    dispatch(addCustomerData(jsonData)); //Customer_Estimate_Flow
  };

  useEffect(() => {
    getData();
  });
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
