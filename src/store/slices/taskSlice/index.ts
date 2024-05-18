import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TodoTask, TodoTaskDTO } from '@/types/todo';

export interface TaskState {
  [id: string]: TodoTask;
}

const initialState: TaskState = {};

const toggleTaskIsDone = (state: TaskState, id: string, isDone: boolean) => {
  if (state[id]) {
    state[id].isDone = isDone;
    state[id].subtasks.forEach((subtask) => {
      subtask.isDone = isDone;
    });
  }
};

const toggleSubtaskIsDone = (
  state: TaskState,
  taskId: string,
  subtaskId: string,
  isDone: boolean
) => {
  const subtaskToFind = state[taskId].subtasks.find((subtask) => subtask.id === subtaskId);
  if (subtaskToFind) {
    subtaskToFind.isDone = isDone;
  }
  const isAllSubtasksIsDone = state[taskId].subtasks.every((subtask) => subtask.isDone);
  if (isAllSubtasksIsDone) {
    state[taskId].isDone = isDone;
    state[taskId].subtasks.forEach((subtask) => {
      subtask.isDone = isDone;
    });
  }
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoTaskDTO>) => {
      const id = nanoid();
      state[id] = {
        id,
        ...action.payload,
      };
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
  deleteTask,
  setTaskIsDone,
  setTaskIsUndone,
  setSubtaskIsDone,
  setSubtaskIsUndone,
} = taskSlice.actions;

export default taskSlice.reducer;
