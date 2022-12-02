import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./Slicers/GetUserSlicer";

const store = configureStore({
  reducer: {
    user: userSlicer,
  },
});

export default store;
