import { createSlice } from '@reduxjs/toolkit';

const systemSlice = createSlice({
    name: 'system',
    initialState: {
        isLoaded: false,
        systems: [],
    },
    reducers: {
        fetched: (state, action) => {
            state.isLoaded = true;
            state.systems = action.payload;
        },
        // logout: (state) => {
        //     state.isAuthenticated = false;
        //     state.user = null;
        // },
    },
});



export const { fetched } = systemSlice.actions;
export const selectSystem = (state) => state.system;
export default systemSlice.reducer;
