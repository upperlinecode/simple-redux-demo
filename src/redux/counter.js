import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",
  initialState: { count: 0 },
  reducers: {
    increment: (state, { payload = 1 }) => {
      // const incrementAmount =
      // typeof action.payload === "number" ? action.payload : 1;
      return { ...state, count: state.count + payload };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice;
