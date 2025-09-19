import { createSlice } from "@reduxjs/toolkit";
import { quitVolunteering } from "./userThunks";

export const quitVolunteeringSlice = createSlice({
    name: 'quitVolunteering',
    initialState: {
        user: null,
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(quitVolunteering.pending, (state) => {
                state.loading = true
            })
            .addCase(quitVolunteering.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false,
                    state.user = null
            })
            .addCase(quitVolunteering.rejected, (state, action) => {
                state.loading = false,
                    state.user = null
                state.error = action.payload || action.error.message
            })
    }
});

export default quitVolunteeringSlice.reducer