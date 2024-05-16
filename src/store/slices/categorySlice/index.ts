import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoTaskCategory } from '@/types/todo';

import { initialCategories } from './constants';

export interface CategoryState {
  categories: TodoTaskCategory[];
}

const initialState: CategoryState = {
  categories: initialCategories,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<TodoTaskCategory>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
