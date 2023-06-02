// itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ItemsService from '../services/items';

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async ({ count }) => {
    return await new ItemsService().fetchItems({ count });
  }
);

export const fetchItem = createAsyncThunk(
  'items/fetchItem',
  async ({ itemId }) => {
    return await new ItemsService().fetchItemById(itemId);
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: state.items.length + 1, name: action.payload });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default itemsSlice.reducer;
