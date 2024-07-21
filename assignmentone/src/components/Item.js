import React from "react";

const Item = ({ items, alldata }) => {
  return (
    <div>
      <h1 className="font-semibold">Inventory Details</h1>
      {items.inventory.map((item) => (
        <p className="bg-slate-300 m-1 p-2 text-orange-600 font-semibold">
          {item.displayName}
          <span className="ml-2 bg-orange-600 text-white rounded-full p-1 px-3 m-1 text-sm">
            {item.category.length}
          </span>
        </p>
      ))}
      <h1 className="font-bold">House Details</h1>
      <h1 className="text-orange-600 font-semibold">Existing House Details</h1>
      <div className="flex justify-between m-2">
        <div>
          <p className="font-semibold">Floor No.</p>
          <p className="text-sm">{alldata.old_floor_no}</p>
        </div>
        <div>
          <p className="font-semibold">Elevater Available</p>
          <p className="text-sm">{alldata.old_elevator_availability}</p>
        </div>
        <div>
          <p className="font-semibold">Packing Required</p>
          <p className="text-sm">{alldata.packing_service}</p>
        </div>
        <div>
          <p className="font-semibold">Distance from truck to door</p>
          <p className="text-sm">{alldata.distance}</p>
        </div>
        <div>
          <p className="font-semibold">Additional Information</p>
          <p className="text-sm">
            {alldata.old_house_additional_info
              ? alldata.old_house_additional_info
              : "No Additional Info"}
          </p>
        </div>
      </div>
      <h1 className="text-orange-600 font-semibold">New House Details</h1>
      <div className="flex justify-between m-2">
        <div>
          <p className="font-semibold">Floor No.</p>
          <p className="text-sm">{alldata.new_floor_no}</p>
        </div>
        <div>
          <p className="font-semibold">Elevater Available</p>
          <p className="text-sm">{alldata.new_elevator_availability}</p>
        </div>
        <div>
          <p className="font-semibold">Packing Required</p>
          <p className="text-sm">{alldata.packing_service}</p>
        </div>
        <div>
          <p className="font-semibold">Distance from truck to door</p>
          <p className="text-sm">{alldata.distance}</p>
        </div>
        <div>
          <p className="font-semibold">Additional Information</p>
          <p className="text-sm">
            {alldata.new_house_additional_info
              ? alldata.new_house_additional_info
              : "No additional Info"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
