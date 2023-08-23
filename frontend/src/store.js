import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import apiSlice from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    authSlice: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
