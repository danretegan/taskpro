import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchColumns = createAsyncThunk(
  'columns/fetchColumns',
  async (boardId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.get(`/api/boards/${boardId}/columns`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createColumn = createAsyncThunk(
  'columns/createColumn',
  async ({ boardId, ...columnData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.post(
        `/api/boards/${boardId}/columns`,
        columnData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchColumns.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchColumns.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default columnsSlice.reducer;
