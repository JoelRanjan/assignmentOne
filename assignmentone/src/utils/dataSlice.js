import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "customerData",
  initialState: {
    data: null,
  },
  reducers: {
    addCustomerData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addCustomerData } = dataSlice.actions;
export default dataSlice.reducer;
