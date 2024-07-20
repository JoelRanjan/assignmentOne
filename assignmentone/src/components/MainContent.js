import React from "react";
import { useSelector } from "react-redux";
import EachMove from "./EachMove";

const MainContent = () => {
  const customerData = useSelector(
    (store) => store.customerData?.data?.Customer_Estimate_Flow
  );

  return (
    <div className="p-2 m-2">
      <h1 className="font-bold">MY MOVES</h1>
      {customerData &&
        customerData.map((item, index) => (
          <EachMove key={index} customerData={item} />
        ))}
    </div>
  );
};

export default MainContent;
