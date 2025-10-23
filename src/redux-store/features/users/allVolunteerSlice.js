import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVolunteers } from "./userThunks";

export const allVolunteersSlice = createSlice({
    name: 'all volunteers',
    initialState: {
        volunteers: [],
        loading: false,
        error: null
    },

    reducers:{
        updatedVolunteer: (state, action) => {
           state.volunteers = {...state.volunteers, ...action.payload} 
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllVolunteers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAllVolunteers.fulfilled, (state, action) => {
                state.loading = false,
                    state.volunteers = action.payload.volunteers
            })
            .addCase(fetchAllVolunteers.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload || action.error.message
            })
    }
});

export default allVolunteersSlice.reducer