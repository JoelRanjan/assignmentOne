import dataSlice from "./dataSlice";
import { configureStore } from "@reduxjs/toolkit";
import showItemsSlice from "./showItemsSlice";

const appStore = configureStore({
  reducer: {
    customerData: dataSlice,
    showItems: showItemsSlice,
  },
});

export default appStore;
