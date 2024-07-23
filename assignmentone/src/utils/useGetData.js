import { useDispatch } from "react-redux";
import { addCustomerData } from "./dataSlice";
import { useEffect } from "react";

const useGetData = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch("http://test.api.boxigo.in/sample-data/ ");
    const jsonData = await data.json();
    dispatch(addCustomerData(jsonData)); //Customer_Estimate_Flow
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useGetData;
