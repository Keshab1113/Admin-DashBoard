import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        user: null,
        logoUrl: 'https://rms.imatrixautomation.com/logo/default.png',
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        register: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
    },
});

export const { login, logout, register } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
