import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login(state, action) {
            if (action.payload) {
                state.user = action.payload;
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
        loading(state) {
            state.isLoading = true;
        },
        finish(state) {
            state.isLoading = false;
        },
    },
});

export function login(tempUser) {
    return async function (dispatch) {
        dispatch({ type: "users/loading" });
        try {
            const res = await fetch(
                `https://65f09d10da8c6584131c25ad.mockapi.io/users`
                // `http://localhost:9999/users`
            );
            const data = await res.json();
            const user = await data.find((user) => {
                return (
                    user.username === tempUser.username &&
                    user.password === tempUser.password
                );
            });
            dispatch({ type: "users/login", payload: user });
        } catch (error) {
            alert(error.message);
        } finally {
            dispatch({ type: "users/finish" });
        }
    };
}

export const { logout } = userSlice.actions;
export default userSlice.reducer;
