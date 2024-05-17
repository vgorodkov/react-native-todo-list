import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoTask, TodoTaskDTO } from '@/types/todo';

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
    setTodos: (state, action: PayloadAction<TodoTask[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<TodoTaskDTO>) => {
      const newTodo: TodoTask = {
        ...action.payload,
        id: nanoid(),
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: PayloadAction<{ taskId: string; editedTask: TodoTaskDTO }>) => {
      const { taskId, editedTask } = action.payload;
      const taskIndex = state.todos.findIndex((todo) => todo.id === taskId);
      state.todos[taskIndex] = {
        ...editedTask,
        id: taskId,
      };
    },
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
});

export const { deleteTodo, toggleTaskIsDone, toggleSubtaskIsDone, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
