import { createSlice } from "@reduxjs/toolkit";

const showItemsSlice = createSlice({
  name: "toggleItems",
  initialState: {
    showItems: false,
    estimateId: null,
  },
  reducers: {
    toggleShowItems: (state, action) => {
      state.showItems = action.payload;
    },
    changeIndex: (state, action) => {
      state.estimateId = action.payload;
    },
  },
});

export const { toggleShowItems, changeIndex } = showItemsSlice.actions;
export default showItemsSlice.reducer;
