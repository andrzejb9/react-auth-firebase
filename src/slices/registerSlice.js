import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    success_msg: "",
    fail_msg: "",
  },
  reducers: {
    registerSuccess: (state, action) => {
      console.log(action);
    },
    registerFail: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerSuccess, registerFail } = registerSlice.actions;

export default registerSlice.reducer;
