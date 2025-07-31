import { configureStore } from "@reduxjs/toolkit";
import section3 from "./modules/section3Slice";
import section4 from "./modules/section4Slice";
const store = configureStore({
  reducer: {
    section3,
    section4,
  },
});

export default store;
