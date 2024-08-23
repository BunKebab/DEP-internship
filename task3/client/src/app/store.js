import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../actions/AuthSlice";
import productSlice from "../actions/ProductSlice";
import orderSlice from "../actions/OrderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    order: orderSlice,
  },
});
