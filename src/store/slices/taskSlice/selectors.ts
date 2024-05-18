import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/types';

import { isSameDate } from '@/utils/isSameDate';

export const selectDoneTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => task.isDone)
);

export const selectUndoneTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => !task.isDone)
);

export const selectImportantTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => task.isImportant)
);

export const selectDailyTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => isSameDate(task.toDateTimestamp, Date.now()))
);

export const selectTasksByCategory = createSelector(
  [(state: RootState) => state.task, (state: RootState, category: string) => category],
  (tasks, category) => Object.values(tasks).filter((t) => t.category === category)
);

export const selectTasksLengthByCategory = createSelector(
  [(state: RootState) => state.task, (state: RootState, category: string) => category],
  (tasks, category) => Object.values(tasks).filter((t) => t.category === category).length
);
