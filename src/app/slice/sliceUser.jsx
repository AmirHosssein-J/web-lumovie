import { createSlice } from "@reduxjs/toolkit";

import ProfilePic from "/src/assets/icon/ProfilePic.png";

export const sliceUser = createSlice({
  name: "user",
  initialState: { name: "MrRadikal", img: ProfilePic },
});

export default sliceUser.reducer;
