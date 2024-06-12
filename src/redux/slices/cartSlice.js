import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    removeProduct(state, action) {
      state.items = state.items.filter((obj) => obj.id != action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addProduct, clearItems, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
