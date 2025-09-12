import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./userThunks";

export const logoutSlice = createSlice({
    name: 'logout',
    initialState: {
        user: null,
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(logout.pending, (state) => {
                state.loading = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false,
                    state.user = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false,
                    state.user = null
                state.error = action.payload || action.error.message
            })
    }
});

export default logoutSlice.reducer