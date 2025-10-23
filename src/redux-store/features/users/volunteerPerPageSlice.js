import { createSlice } from "@reduxjs/toolkit";
import { fourPerPage } from "./userThunks";

const volunteerPerPageSlice = createSlice({
    name: 'volunteersPerPage',
    initialState: {
        volunteers: [],
        totalVolunteers: 0,
        pages: 0,
        page: 0,
        error: null,
        loading: false
    },

    extraReducers: builder => {
        builder
        .addCase(fourPerPage.pending, (state, action) => {
            state.loading = true
        })

            .addCase(fourPerPage.fulfilled, (state, action) => {
                state.loading = false;
                state.volunteers = action.payload.volunteers;
                state.pages = action.payload.pages;
                state.totalVolunteers = action.payload.totalVolunteers
            })

            .addCase(fourPerPage.rejected, (state, action) =>{
                state.loading = false
                state.error = action.payload
            })
    }
})

export default volunteerPerPageSlice.reducer