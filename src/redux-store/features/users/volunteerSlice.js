import { createSlice } from "@reduxjs/toolkit";
import { volunteer } from "./userThunks";

const volunteerSlice = createSlice({
    name: "volunteer",
    initialState: {
        volunteerState: null,
        loading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(volunteer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(volunteer.fulfilled, (state, action) => {
                state.loading = false;
                state.volunteerState = action.payload.volunteer; // store updated user 
            })
            .addCase(volunteer.rejected, (state, action) => {
                state.loading = false;
                 state.error = action.payload || action.error.message
            });
    },
});

export default volunteerSlice.reducer