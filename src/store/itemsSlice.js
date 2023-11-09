// itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ItemsService from '../services/items';

const itemsService = new ItemsService();

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  return await itemsService.fetchItems();
});

export const fetchItem = createAsyncThunk('items/fetchItem', async () => {
  throw new Error('Not implemented');
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    nextItemId: 1,
    items: [],
    selectedItem: null,
    loading: false,
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: state.nextItemId,
        checked: false,
        name: action.payload,
      });
      state.nextItemId += 1;
      itemsService.updateItems(state.items);

      return state;
    },
    updateItemChecked: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checked: action.payload.checked };
        }

        return item;
      });
      itemsService.updateItems(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      itemsService.updateItems(state.items);

      return state;
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
        state.nextItemId =
          action.payload.length > 0
            ? Math.max(...action.payload.map((item) => item.id)) + 1
            : 1;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItem, removeItem, updateItemChecked } = itemsSlice.actions;

export default itemsSlice.reducer;
