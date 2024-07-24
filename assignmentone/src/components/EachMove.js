import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaHouse } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, toggleShowItems } from "../utils/showItemsSlice";
import Item from "./Item";

const EachMove = ({ customerData, key }) => {
  const dispatch = useDispatch();
  const getEstId = useSelector((store) => store.showItems?.estimateId);
  const showData = useSelector((store) => store.showItems?.showItems);
  const showItems = () => {
    dispatch(toggleShowItems(false));

    if (getEstId === customerData.estimate_id) {
      dispatch(toggleShowItems(false));
      dispatch(changeIndex(null));
    } else {
      dispatch(toggleShowItems(true));
      dispatch(changeIndex(customerData.estimate_id));
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="m-2 p-2 w-2/6">
          <p className="font-bold">From</p>
          <p>
            {customerData.from_address?.fromAddress +
              "," +
              customerData.from_address?.fromLocality +
              "," +
              customerData.from_address?.fromCity +
              "," +
              customerData.from_address?.fromState}
          </p>
        </div>
        <div className=" mt-8 ">
          <h1>
            <BsFillArrowRightCircleFill className="text-orange-600 size-6" />
          </h1>
        </div>
        <div className="m-2 p-2 w-2/6">
          <p className="font-bold">To</p>
          <p>
            {customerData.to_address?.toAddress +
              "," +
              customerData.to_address?.toLocality +
              "," +
              customerData.to_address?.toCity +
              "," +
              customerData.to_address?.toState}
          </p>
        </div>
        <div className="m-2 p-2 w-2/6">
          <p className="font-bold">Request</p>
          <p className="text-orange-600 font-semibold">
            {customerData?.estimate_id}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 m-2 flex">
          <p className="pt-3 ">
            <FaHouse className="text-orange-600 size-6" />
          </p>
          <p className="pt-3  pl-2">{customerData?.property_size}</p>
        </div>
        <div className="p-2 m-2 flex">
          <p className="mt-3 ">
            <FaBoxes className="text-orange-600 size-6" />
          </p>
          <p className="pt-3 pl-2">{customerData?.total_items}</p>
        </div>
        <div className="p-2 m-2 flex">
          <p className="mt-3 ">
            <GiPathDistance className="text-orange-600 size-6" />
          </p>
          <p className="pt-3 pl-2">{customerData?.distance}</p>
        </div>
        <div className="p-2 m-2 flex">
          <p className="mt-3 ">
            <BsCalendar2Date className="text-orange-600 size-6" />
          </p>
          <p className="pt-3 pl-2">{customerData?.date_created}</p>
        </div>
        <div className="p-2 m-2 flex">
          <input type="checkbox" checked className="checked:bg-sky-700" />
          <p className="pt-3 pl-2">is flexible</p>
        </div>
        <div className="p-2 m-2 flex">
          <button
            className="px-2 py-1 m-2 border border-orange-600 text-orange-600"
            onClick={() => showItems(key)}
          >
            View more details
          </button>
          <button className="px-2 py-1 m-2 bg-orange-600 text-white">
            Quotes Awaiting
          </button>
        </div>
      </div>
      <div className="flex">
        <p className="mt-3 ">
          <TbAlertTriangleFilled className="text-orange-600 size-4" />
        </p>
        <h1 className="p-2">
          <span className="font-bold text-sm">Disclaimer:</span> Please update
          our move date before two days of shifting
        </h1>
      </div>
      {showData && getEstId === customerData.estimate_id ? (
        <Item items={customerData.items} alldata={customerData} />
      ) : (
        ""
      )}

      <hr className="text-6xl" />
    </div>
  );
};

export default EachMove;
