import { createSlice } from "@reduxjs/toolkit";

export const sliceNewSeries = createSlice({
  name: "isNewSeriesClosed",
  initialState: { value: false },

  reducers: {
    toggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle } = sliceNewSeries.actions;

export default sliceNewSeries.reducer;
