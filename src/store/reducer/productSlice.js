import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsDetails: {},
  },
  reducers: {
    setproducts: (state, { payload }) => {
      state.products = payload.products;
    },
    setProductsDetails: (state, { payload }) => {
      state.productsDetails = payload.productList;
    },
  },
});
export const { setproducts, setProductsDetails } = productSlice.actions;

export default productSlice.reducer;
