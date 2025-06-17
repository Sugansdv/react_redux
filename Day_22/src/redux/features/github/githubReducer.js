
import { createSlice } from '@reduxjs/toolkit';
import { fetchGitHubUser } from './githubActions';

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchGitHubUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGitHubUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default githubSlice.reducer;
