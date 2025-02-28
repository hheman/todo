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
      console.log('in remove', state.items);

      return state;
    },
    swapItems: (state, action) => {
      const { movedItem, movedAfterThisItem } = action.payload;
      const sourceIndex = state.items.findIndex(
        (item) => item.id === movedItem
      );
      const destinationIndex = state.items.findIndex(
        (item) => item.id === movedAfterThisItem
      );

      const updatedItems = [...state.items];
      const [removedItem] = updatedItems.splice(sourceIndex, 1);
      updatedItems.splice(destinationIndex, 0, removedItem);

      state.items = updatedItems;
      itemsService.updateItems(state.items);

      return state;
    },
    removeCheckedItems: (state) => {
      state.items = state.items.filter((item) => !item.checked);
      itemsService.updateItems(state.items);

      return state;
    },
    removeAllItems: (state) => {
      state.items = [];
      itemsService.updateItems(state.items);
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

export const {
  addItem,
  removeItem,
  updateItemChecked,
  swapItems,
  removeCheckedItems,
  removeAllItems,
} = itemsSlice.actions;

export default itemsSlice.reducer;
