import { createSlice } from "@reduxjs/toolkit";
import { isUserLoggedIn } from "./userThunks";

export const isUserLoggedInSlice = createSlice({
    name: 'isUserLoggedInSlice',
    initialState: {
        user: null,
        loading: true,
        error: null
    },

    reducers: {
        updatedVolunteerData: (state, action) => {
            state.user = {...state.user, ...action.payload}
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(isUserLoggedIn.pending, (state) => {
                state.loading = true
            })
            .addCase(isUserLoggedIn.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.loading = false,
                    state.user = action.payload?.loggedInUser
            })
            .addCase(isUserLoggedIn.rejected, (state, action) => {
                state.loading = false,
                    state.user = null
                state.error = action.payload || action.error.message
            })
    }
})

export const {updatedVolunteerData} = isUserLoggedInSlice.actions
export default isUserLoggedInSlice.reducer