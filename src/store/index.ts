import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import todoReducer from './slices/todosSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    todo: todoReducer,
  },
});
