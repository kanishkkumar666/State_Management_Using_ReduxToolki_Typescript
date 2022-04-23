import { createSlice } from "@reduxjs/toolkit";

const initialState = { value1: 0 };

export const value1Slicer = createSlice({
  name: "value1",
  initialState,
  reducers: {
    value1: (state, actions) => {
      state.value1 = actions.payload;
    },
  },
});

export const {value1} = value1Slicer.actions

export default value1Slicer.reducer
