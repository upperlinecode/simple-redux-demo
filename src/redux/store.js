// Add your store here.
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./counter";

const store = configureStore({
  reducer: {
    countReducer: countSlice.reducer,
  },
});

export default store;
