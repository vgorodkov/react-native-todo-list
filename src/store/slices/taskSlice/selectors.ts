import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/types';

import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';
import { filterTasksByTime } from '@/utils/filterTasksByTime';
import { isSameDate } from '@/utils/isSameDate';

export const selectAllTasks = (state: RootState) => state.task;

export const selectDoneTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => task.isDone)
);

export const selectTaskById = (state: RootState, id: string) => state.task[id];

export const selectUndoneTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => !task.isDone)
);

export const selectImportantTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => task.isImportant)
);

export const selectDailyTasks = createSelector([(state: RootState) => state.task], (tasks) =>
  Object.values(tasks).filter((task) => isSameDate(task.toDateTimestamp))
);

export const selectTasksByTimeFilter = createSelector(
  [selectAllTasks, selectTimeFilter],
  (tasks, timeFilter) => {
    return filterTasksByTime(tasks, timeFilter);
  }
);

export const selectTasksByTitle = createSelector(
  [selectTasksByTimeFilter, (state: RootState, title: string) => title],
  (tasks, title) => Object.values(tasks).filter((t) => t.title.includes(title))
);

export const selectTasksByCategory = createSelector(
  [selectTasksByTimeFilter, (state: RootState, category: string) => category],
  (tasks, category) => Object.values(tasks).filter((t) => t.category === category)
);

export const selectTasksLengthByCategory = createSelector(
  selectTasksByCategory,
  (taskByCategory) => taskByCategory.length
);

export const selectDoneTasksByCategory = createSelector(selectTasksByCategory, (taskByCategory) =>
  taskByCategory.filter((task) => task.isDone)
);

export const selectUndoneTasksByCategory = createSelector(selectTasksByCategory, (taskByCategory) =>
  taskByCategory.filter((task) => !task.isDone)
);
