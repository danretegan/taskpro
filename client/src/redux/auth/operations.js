import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//! VERCEL:
axios.defaults.baseURL = 'https://taskpro-server-mu.vercel.app';

//! LOCAL:
// axios.defaults.baseURL = 'http://localhost:3000';

const utils = {
  setAuthHeader: token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => delete axios.defaults.headers.common.Authorization,
};

const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      const response = await axios.post('/api/users/register', userData);

      utils.setAuthHeader(response.data.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2500));
    const response = await axios.post('/api/users/login', userData);

    utils.setAuthHeader(response.data.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = await axios.get('/api/users/logout');

    utils.clearAuthHeader();

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      utils.setAuthHeader(persistedToken);
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put('/api/users/profile', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/theme', { theme: data });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { register, login, logout, refreshUser, updateUser, updateTheme };
