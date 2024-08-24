import { configureStore } from "@reduxjs/toolkit";

import authSlice from "../actions/AuthSlice";
import productSlice from "../actions/ProductSlice";
import orderSlice from "../actions/OrderSlice";
import cartSlice from "../actions/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    order: orderSlice,
    cart: cartSlice,
  },
});
