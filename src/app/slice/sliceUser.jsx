import { createSlice } from "@reduxjs/toolkit";

import ProfilePic from "/src/assets/icon/ProfilePic.png";

export const sliceUser = createSlice({
  name: "user",
  initialState: { name: "MrRadikal", img: ProfilePic },

  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = sliceUser.actions;

export default sliceUser.reducer;
