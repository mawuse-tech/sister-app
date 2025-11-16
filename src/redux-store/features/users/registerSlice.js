import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userThunks";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }},

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loading = false,
                    state.users.push(action.payload)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload || action.error.message
            })
    }
});
export const { setError } = registerSlice.actions
export default registerSlice.reducer

