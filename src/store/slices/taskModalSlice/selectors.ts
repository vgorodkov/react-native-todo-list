import { RootState } from '@/store/types';

export const selectTaskModalTask = (state: RootState) => state.taskModal.task;

export const selectTaskModalToDateTimestamp = (state: RootState) =>
  state.taskModal.task.toDateTimestamp;

export const selectTaskModalIsDone = (state: RootState) => state.taskModal.task.isDone;
export const selectTaskModalIsImportant = (state: RootState) => state.taskModal.task.isImportant;
export const selectTaskModalSubtasks = (state: RootState) => state.taskModal.task.subtasks;
