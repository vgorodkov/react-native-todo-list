import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/types';

export const isTodosLoadingSelector = (state: RootState) => state.todo.isLoading;

export const selectAllTodos = (state: RootState) => state.todo.todos;

export const selectDoneTodos = createSelector([(state: RootState) => state.todo], ({ todos }) => {
  return todos.filter((todo) => todo.isDone);
});

export const selectUndoneTodos = createSelector([(state: RootState) => state.todo], ({ todos }) => {
  return todos.filter((todo) => !todo.isDone);
});

export const selectImportantTodos = createSelector(
  [(state: RootState) => state.todo],
  ({ todos }) => {
    return todos.filter((todo) => !todo.isImportant);
  }
);
