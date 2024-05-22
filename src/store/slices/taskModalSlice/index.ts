import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, nanoid } from '@reduxjs/toolkit';

import { TodoSubtaskDTO } from '@/types/todo';

import { addTask, editTask } from '../taskSlice';
import { TaskModal, TaskModalState } from './types';

const initialState: TaskModalState = {
  task: {
    toDateTimestamp: Date.now(),
    isDone: false,
    isImportant: false,
    subtasks: [],
  },
};

export const taskModalSLice = createSlice({
  name: 'taskModal',
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<TaskModal>) => {
      state.task = action.payload;
    },
    addSubtask: (state, action: PayloadAction<TodoSubtaskDTO>) => {
      const id = nanoid();
      const newSubtask = {
        id,
        ...action.payload,
      };
      state.task.subtasks.push(newSubtask);
    },
    deleteSubtask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.task.subtasks = state.task.subtasks.filter((subtask) => subtask.id !== id);
    },
    handleDateSelection: (state, action: PayloadAction<number>) => {
      state.task.toDateTimestamp = action.payload;
    },
    toggleIsImportant: (state) => {
      state.task.isImportant = !state.task.isImportant;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTask, () => {
      return initialState;
    });
    builder.addCase(editTask, () => {
      return initialState;
    });
  },
});

export const {
  addSubtask,
  deleteSubtask,
  handleDateSelection,
  toggleIsImportant,
  setInitialState,
} = taskModalSLice.actions;

export default taskModalSLice.reducer;
