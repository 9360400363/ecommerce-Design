import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: localStorage.getItem("cartId") || "",
    cartDetails: {},
  },
  reducers: {
    setItems: (state, { payload }) => {
      const { products, _id } = payload.data;
      const data = { products, id: _id };
      localStorage.setItem("cartId", _id);
      state.cartDetails = data;
    },
  },
});
export const { setItems } = cartSlice.actions;

export default cartSlice.reducer;
