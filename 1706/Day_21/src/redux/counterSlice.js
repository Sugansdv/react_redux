// Task 3, 4, 5, 10
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Task 3: Initial state
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 🔹 Task 10: Initialize counter with a prop value
    initialize: (state, action) => {
      state.value = action.payload;
    },
    // 🔹 Mini Project 1: Add reset functionality
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, initialize, reset } = counterSlice.actions;
export default counterSlice.reducer;
