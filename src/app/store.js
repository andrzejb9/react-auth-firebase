import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../slices/registerSlice";

export default configureStore({
  reducer: {
    register: registerReducer,
  },
});
