import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import authReducer from "./reducer/authSlice";
import productSlice from "./reducer/productSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productSlice,
  },
});
