import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: {}, // { receiverId: [arrayOfMessages] }
  },
  reducers: {
    setMessagesForReceiver: (state, action) => {
      const { receiverId, messages } = action.payload;
      state.messages[receiverId] = messages;
    },
    addMessage: (state, action) => {
      const { receiverId, message } = action.payload;
      if (!state.messages[receiverId]) {
        state.messages[receiverId] = [];
      }
      state.messages[receiverId].push(message);
    },
    clearChat: (state, action) => {
      const { receiverId } = action.payload;
      delete state.messages[receiverId];
    },
  },
});

export const { setMessagesForReceiver, addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
