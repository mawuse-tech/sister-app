import { createSlice } from "@reduxjs/toolkit";
import { chatPartners } from "./userThunks";

export const chatPartnersSlice = createSlice({
  name: "partners",
  initialState: {
    partners: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(chatPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(chatPartners.fulfilled, (state, action) => {
        //console.log("Fetched partners:", action.payload);
        state.loading = false;
        state.partners = action.payload; // Replace array
      })
      .addCase(chatPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default chatPartnersSlice.reducer;
