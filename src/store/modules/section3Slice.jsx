import { createSlice } from "@reduxjs/toolkit";
import dataList from "../../assets/api/section3SwiperData";
const initialState = {
  breads: dataList,
};

export const section3Slice = createSlice({
  name: "section3",
  initialState,
  reducers: {
    plusQty: (state, action) => {
      const bread = state.breads.find((item) => item.id === action.payload);
      bread.qty += 1;
    },
    minQty: (state, action) => {
      const bread = state.breads.find((item) => item.id === action.payload);
      if (bread.qty === 1) return;
      bread.qty -= 1;
    },
  },
});

export const section3Actions = section3Slice.actions;
export default section3Slice.reducer;
