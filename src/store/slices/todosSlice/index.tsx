import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoTask } from '@/types/todo';

import { loadTodos } from './todosThunk';

export interface TodoState {
  todos: TodoTask[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  isLoading: true,
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTaskIsDone: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.todos.find((todo) => todo.id === taskId);
      if (task) {
        task.isDone = !task.isDone;
        task.subtasks?.forEach((subtask) => {
          subtask.isDone = task.isDone;
        });
      }
    },
    toggleSubtaskIsDone: (state, action: PayloadAction<{ taskId: string; subTaskId: string }>) => {
      const { taskId, subTaskId } = action.payload;
      const task = state.todos.find((todo) => todo.id === taskId);
      const subtasks = task?.subtasks;

      if (subtasks && task) {
        const subtaskIndex = subtasks.findIndex((subtask) => subtask.id === subTaskId);
        if (subtaskIndex !== -1) {
          subtasks[subtaskIndex].isDone = !subtasks[subtaskIndex].isDone;

          const allSubtasksDone = subtasks.every((subtask) => subtask.isDone);

          if (allSubtasksDone) {
            task.isDone = true;
          } else {
            task.isDone = false;
          }
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        const todosFromAsyncStorage = action.payload;
        state.todos = todosFromAsyncStorage;
        state.isLoading = false;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { deleteTodo, toggleTaskIsDone, toggleSubtaskIsDone } = todoSlice.actions;

export default todoSlice.reducer;
