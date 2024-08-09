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

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async ({ boardId, columnTitle }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`/api/boards/${boardId}/columns/${columnTitle}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return columnTitle;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ boardId, columnTitle, newTitle }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.patch(
        `/api/boards/${boardId}/columns/${columnTitle}`,
        { newTitle },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { columnTitle, newTitle: response.data.title };
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
      })
      .addCase(deleteColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          column => column.title !== action.payload
        );
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const column = state.items.find(column => column.title === action.payload.columnTitle);
        if (column) {
          column.title = action.payload.newTitle;
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default columnsSlice.reducer;