import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "../actions/AuthSlice";
import PostSlice from "../actions/PostSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    post: PostSlice,
  },
});
