import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        dataReceived(state, action) {
            state.isLoading = true;
            state.products = action.payload;
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

// export const {} = productSlice.actions;
export default productSlice.reducer;
