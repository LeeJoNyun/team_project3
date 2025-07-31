import { createSlice } from "@reduxjs/toolkit";
import dataList from "../../assets/api/section4MenuData";

const initialState = {
  data: dataList,
};

export const section4Slice = createSlice({
  name: "section4",
  initialState,
  reducers: {
    plusQty: (state, action) => {
      const targetList = state.data.find(
        (item) => item.seq === action.payload.seq
      ).data;
      const target = targetList.find((item) => item.id === action.payload.id);
      target.qty += 1;
    },
    minQty: (state, action) => {
      const targetList = state.data.find(
        (item) => item.seq === action.payload.seq
      ).data;
      const target = targetList.find((item) => item.id === action.payload.id);
      if (target.qty === 1) return;
      target.qty -= 1;
    },
  },
});

export const section4Actions = section4Slice.actions;
export default section4Slice.reducer;
