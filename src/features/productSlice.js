import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
};

const BASE_URL = "http://localhost:9999";

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    dataReceived(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    dataFail(state) {
      state.isLoading = true;
    },
    add(state, action) {
      state.products = [...state.products, action.payload];
    },
  },
});

export function dataReceived() {
  return async function (dispatch) {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    dispatch({ type: "product/dataReceived", payload: data });
  };
}
export function add(newProduct) {
  return async function (dispatch) {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    dispatch({ type: "product/add", payload: data });
  };
}

export const { dataFail } = productSlice.actions;
export default productSlice.reducer;
