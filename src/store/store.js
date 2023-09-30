import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import productSlice from "./features/productSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
