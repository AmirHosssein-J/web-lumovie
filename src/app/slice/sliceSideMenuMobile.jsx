import { createSlice } from "@reduxjs/toolkit";

export const sliceSideMenuMobile = createSlice({
  name: "isMenuClosedMobile",
  initialState: { value: false },

  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = sliceSideMenuMobile.actions;

export default sliceSideMenuMobile.reducer;
