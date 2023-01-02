import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  tabIndex: 0,
  sort: {
    name: 'сначала дешёвые',
    sortBy: 'price',
    sortType: 'asc',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setTabIndex, setSort } = filterSlice.actions;

export default filterSlice.reducer;
