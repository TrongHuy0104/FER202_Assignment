import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import productSlice from "../features/productSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        products: productSlice,
    },
});

export default store;
