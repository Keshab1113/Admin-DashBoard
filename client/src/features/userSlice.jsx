import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        systems: [],
        isLogedin: false,
        isAdmin: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedin = action.payload.isLogedin;
            state.isAdmin = action.payload.user?.isAdmin || false;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.systems = [];
            state.isLogedin = false;
            state.isAdmin = false;
        },
        register: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogedin = action.payload.isLogedin;
            state.isAdmin = action.payload.user?.isAdmin || false;
        },
        fetched: (state, action) => {
            state.systems = action.payload.systems;
        },
    },
});

export const { login, logout, register, fetched } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectIsAdmin = (state) => state.user.isAdmin;
export default userSlice.reducer;
