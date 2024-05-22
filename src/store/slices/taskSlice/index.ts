import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoTask, TodoTaskDTO } from '@/types/todo';
import { getDaysFromNow } from '@/utils/getDaysFromNow';

import { toggleSubtaskIsDone, toggleTaskIsDone } from './utils';

export interface TaskState {
  [id: string]: TodoTask;
}

const initialState: TaskState = {};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    revalidateTasks: (state) => {
      Object.values(state).forEach((task) => {
        if (getDaysFromNow(task.toDateTimestamp) < 0) {
          delete state[task.id];
        }
      });
    },
    addTask: (state, action: PayloadAction<TodoTaskDTO>) => {
      const id = nanoid();
      state[id] = {
        id,
        ...action.payload,
      };
    },
    editTask: (state, action: PayloadAction<{ id: string; taskDTO: TodoTaskDTO }>) => {
      const { id, taskDTO } = action.payload;
      state[id] = { id, ...taskDTO };
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    setTaskIsDone: (state, action: PayloadAction<string>) => {
      toggleTaskIsDone(state, action.payload, true);
    },
    setTaskIsUndone: (state, action: PayloadAction<string>) => {
      toggleTaskIsDone(state, action.payload, false);
    },
    setSubtaskIsDone: (state, action: PayloadAction<{ taskId: string; subtaskId: string }>) => {
      const { subtaskId, taskId } = action.payload;
      toggleSubtaskIsDone(state, taskId, subtaskId, true);
    },
    setSubtaskIsUndone: (state, action: PayloadAction<{ taskId: string; subtaskId: string }>) => {
      const { subtaskId, taskId } = action.payload;
      toggleSubtaskIsDone(state, taskId, subtaskId, false);
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  setTaskIsDone,
  setTaskIsUndone,
  revalidateTasks,
  setSubtaskIsDone,
  setSubtaskIsUndone,
} = taskSlice.actions;

export default taskSlice.reducer;
