import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoSubtask, TodoTask, TodoTaskDTO } from '@/types/todo';

import { addTask } from '../taskSlice';

const initialState: TodoTaskDTO = {
  title: '',
  description: '',
  category: '',
  toDateTimestamp: Date.now(),
  timeRange: {
    from: new Date().toISOString(),
    to: new Date().toISOString(),
  },
  isDone: false,
  isImportant: false,
  subtasks: [],
};

export const taskModalSlice = createSlice({
  name: 'taskModal',
  initialState,
  reducers: {
    setInitialTaskState: (state, action: PayloadAction<TodoTask>) => {
      state = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    handleTextInfoInput: (
      state,
      action: PayloadAction<{ mode: 'title' | 'description'; text: string }>
    ) => {
      const { mode, text } = action.payload;
      state[mode] = text;
    },
    handleDateSelection: (state, action: PayloadAction<number>) => {
      state.toDateTimestamp = action.payload;
    },
    handleTimeRangeSelection: (
      state,
      action: PayloadAction<{ mode: 'from' | 'to'; value: string }>
    ) => {
      const { mode, value } = action.payload;
      state.timeRange[mode] = value;
    },
    toggleTaskModalIsImportant: (state) => {
      state.isImportant = !state.isImportant;
    },
    addSubtask: (state, action: PayloadAction<string>) => {
      const newSubtask: TodoSubtask = {
        id: nanoid(),
        isDone: false,
        title: action.payload,
      };
      state.subtasks.push(newSubtask);
    },
    deleteSubtask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.subtasks = state.subtasks.filter((subtask) => subtask.id !== id);
    },
  },
  extraReducers(builder) {
    builder.addCase(addTask, () => {
      return initialState;
    });
  },
});

export const {
  setInitialTaskState,
  handleTextInfoInput,
  handleDateSelection,
  handleTimeRangeSelection,
  toggleTaskModalIsImportant,
  addSubtask,
  setCategory,
  deleteSubtask,
} = taskModalSlice.actions;

export default taskModalSlice.reducer;
