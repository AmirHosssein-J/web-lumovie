import { createSlice } from "@reduxjs/toolkit";

export const sliceSideMenu = createSlice({
  name: "isMenuClosed",
  initialState: { value: false },

  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = sliceSideMenu.actions;

export default sliceSideMenu.reducer;
