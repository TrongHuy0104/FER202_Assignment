import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    currentProduct: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        dataReceived(state, action) {
            state.isLoading = true;
            state.products = action.payload;
        },
        loading(state) {
            state.isLoading = true;
        },
        finish(state) {
            state.isLoading = false;
        },
        remove(state, action) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        add(state, action) {
            state.products = [...state.products, action.payload];
        },
        getProductById(state, action) {
            state.currentProduct = action.payload;
        },
        edit: {
            prepare(id, data) {
                return {
                    payload: {
                        id,
                        data,
                    },
                };
            },
            reducer(state, action) {
                state.products = state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return action.payload.data;
                    } else {
                        return product;
                    }
                });
            },
        },
    },
});

export function dataReceived() {
    return async function (dispatch) {
        dispatch({ type: "products/loading" });
        try {
            const res = await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/products`
            );
            const data = await res.json();
            dispatch({ type: "products/dataReceived", payload: data });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "products/finish" });
        }
    };
}
export function getProductById(id) {
    return async function (dispatch) {
        dispatch({ type: "products/loading" });
        try {
            const res = await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/products/${id}`
            );
            const data = await res.json();
            dispatch({ type: "products/getProductById", payload: data });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "products/finish" });
        }
    };
}
export function add(product) {
    return async function (dispatch) {
        dispatch({ type: "products/loading" });
        try {
            const res = await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/products`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(product),
                }
            );
            const data = await res.json();
            dispatch({ type: "products/add", payload: data });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "products/finish" });
        }
    };
}
export function remove(id) {
    return async function (dispatch) {
        dispatch({ type: "products/loading" });
        try {
            await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/products/${id}`,
                {
                    method: "DELETE",
                }
            );
            dispatch({ type: "products/remove", payload: id });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "products/finish" });
        }
    };
}
export function edit(id, updateValue) {
    return async function (dispatch) {
        dispatch({ type: "products/loading" });
        try {
            const res = await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/products/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updateValue),
                }
            );
            const data = await res.json();
            dispatch({
                type: "products/edit",
                payload: {
                    id,
                    data,
                },
            });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "products/finish" });
        }
    };
}

// export const {} = productSlice.actions;
export default productSlice.reducer;
