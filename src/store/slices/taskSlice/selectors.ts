import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/types';

import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';
import { getDaysFromNow } from '@/utils/getDaysFromNow';
import { isSameDate } from '@/utils/isSameDate';

export const selectAllTasks = (state: RootState) => state.task;

export const selectTodosByTimeFilter = createSelector(
  [selectAllTasks, selectTimeFilter],
  (tasks, timeFilter) => {
    const taskArray = Object.values(tasks);

    switch (timeFilter) {
      case 'Today':
        return taskArray.filter((task) => isSameDate(task.toDateTimestamp));
      case 'Week':
        return taskArray.filter((task) => getDaysFromNow(task.toDateTimestamp) <= 7);
      case 'Month':
        return taskArray.filter((task) => getDaysFromNow(task.toDateTimestamp) <= 31);
      default:
        return taskArray;
    }
  }
);

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
  Object.values(tasks).filter((task) => isSameDate(task.toDateTimestamp))
);

export const selectTasksByCategory = createSelector(
  [selectTodosByTimeFilter, (state: RootState, category: string) => category],
  (tasks, category) => Object.values(tasks).filter((t) => t.category === category)
);

export const selectTasksLengthByCategory = createSelector(
  selectTasksByCategory,
  (taskByCategory) => taskByCategory.length
);
