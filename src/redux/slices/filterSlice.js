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
    setFilters(state, action) {
      state.tabIndex = action.payload.tabIndex;
      state.sort = action.payload.selectedSort;
    },
  },
});

export const { setTabIndex, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
