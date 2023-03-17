import { createSlice } from "@reduxjs/toolkit";

export const sliceListGrid = createSlice({
  name: "isMoviesCompact",
  initialState: { value: false },

  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = sliceListGrid.actions;

export default sliceListGrid.reducer;
