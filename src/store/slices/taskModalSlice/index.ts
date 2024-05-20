import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoSubtask, TodoTask, TodoTaskDTO } from '@/types/todo';

import { addTask, editTask } from '../taskSlice';

interface TaskModalState {
  taskDTO: TodoTaskDTO;
}

const initialState: TaskModalState = {
  taskDTO: {
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
  },
};

export const taskModalSlice = createSlice({
  name: 'taskModal',
  initialState,
  reducers: {
    setInitialTaskState: (state, action: PayloadAction<TodoTask>) => {
      state.taskDTO = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.taskDTO.category = action.payload;
    },
    handleTextInfoInput: (
      state,
      action: PayloadAction<{ mode: 'title' | 'description'; text: string }>
    ) => {
      const { mode, text } = action.payload;
      state.taskDTO[mode] = text;
    },
    handleDateSelection: (state, action: PayloadAction<number>) => {
      state.taskDTO.toDateTimestamp = action.payload;
    },
    handleTimeRangeSelection: (
      state,
      action: PayloadAction<{ mode: 'from' | 'to'; value: string }>
    ) => {
      const { mode, value } = action.payload;
      state.taskDTO.timeRange[mode] = value;
    },
    toggleTaskModalIsImportant: (state) => {
      state.taskDTO.isImportant = !state.taskDTO.isImportant;
    },
    addSubtask: (state, action: PayloadAction<string>) => {
      const newSubtask: TodoSubtask = {
        id: nanoid(),
        isDone: false,
        title: action.payload,
      };
      state.taskDTO.subtasks.push(newSubtask);
    },
    deleteSubtask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.taskDTO.subtasks = state.taskDTO.subtasks.filter((subtask) => subtask.id !== id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addTask, () => {
        return initialState;
      })
      .addCase(editTask, () => {
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
