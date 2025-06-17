import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔹 Initial state
const initialState = {
  loading: false,
  data: [],
  error: null
};

// 🔹 Task 6: Create thunk with invalid URL
export const fetchInvalidUsers = createAsyncThunk(
  'error/fetchInvalidUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-users'); // ❌ wrong endpoint
      if (!response.ok) {
        throw new Error('Invalid URL: Failed to fetch users.');
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 🔹 Create separate slice for error simulation
const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvalidUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInvalidUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInvalidUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default errorSlice.reducer;
