// Task 13: Global message slice
import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    text: 'Hello from Redux!'
  },
  reducers: {
    updateMessage: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { updateMessage } = messageSlice.actions;
export default messageSlice.reducer;
