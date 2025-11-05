import { createSlice } from "@reduxjs/toolkit";
import { recentChatFunc } from "./userThunks";

export const recentChatSlice = createSlice({
  name: "recent-chat",
  initialState: {
    recentChat: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(recentChatFunc.pending, (state) => {
        state.loading = true;
      })
      .addCase(recentChatFunc.fulfilled, (state, action) => {
        state.loading = false;
        state.recentChat = action.payload?.data || [];
      })
      .addCase(recentChatFunc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default recentChatSlice.reducer;
