import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    dataReceived(state, action) {
      state.isLoading = true;
      state.products = action.payload;
    },
    productSelected(state, action) {
      const selectedProductId = action.payload.id;
      state.selectedProduct = state.products.find(
        (product) => product.id === selectedProductId
      );
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export function dataReceived() {
  return async function (dispatch) {
    try {
      const res = await fetch(
        `https://65f09d10da8c6584131c25ad.mockapi.io/products`
      );
      const data = await res.json();
      dispatch({ type: "products/dataReceived", payload: data });
    } catch (error) {
      alert(error.message);
    }
  };
}

export const { productSelected, setLoading } = productSlice.actions;
export default productSlice.reducer;
