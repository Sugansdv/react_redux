import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGitHubUser = createAsyncThunk(
  'github/fetchUser',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('User not found or API error');
    }
  }
);
