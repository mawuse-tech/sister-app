import { createSlice } from "@reduxjs/toolkit";
import { volunteer } from "./userThunks";

const volunteerSlice = createSlice({
    name: "volunteer",
    initialState: {
        volunteerState: null,
        loading: false,
        error: null
    },
     reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }},

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

export const { setError } = volunteerSlice.actions
export default volunteerSlice.reducer