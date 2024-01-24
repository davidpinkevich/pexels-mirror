import { configureStore } from "@reduxjs/toolkit";
import pexels from "../slices";

const store = configureStore({
  reducer: { pexels },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
