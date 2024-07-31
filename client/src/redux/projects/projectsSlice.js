import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for creating a new project
export const createProject = createAsyncThunk('projects/createProject', async (projectData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    const response = await axios.post('/api/boards', projectData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define async thunk for fetching user projects
export const fetchUserProjects = createAsyncThunk('projects/fetchUserProjects', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    const response = await axios.get('/api/boards', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define async thunk pentru actualizarea unui proiect
export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async (projectData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(`/api/boards/${projectData.id}`, projectData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define async thunk for deleting a project
export const deleteProject = createAsyncThunk('projects/deleteProject', async (projectId, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    await axios.delete(`/api/boards/${projectId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return projectId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(project => project._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default projectsSlice.reducer;
