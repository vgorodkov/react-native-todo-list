import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/types';

import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';
import { filterTasksByTime } from '@/utils/filterTasksByTime';
import { isSameDate } from '@/utils/isSameDate';

export const selectAllTasks = (state: RootState) => state.task.entities;

export const selectTaskById = (id: string) => (state: RootState) => state.task.entities[id];

const selectTasksArray = createSelector(selectAllTasks, (tasks) => Object.values(tasks));

export const selectDoneTasks = createSelector(selectTasksArray, (tasks) =>
  tasks.filter((task) => task.isDone)
);

export const selectUndoneTasks = createSelector(selectTasksArray, (tasks) =>
  tasks.filter((task) => !task.isDone)
);

export const selectImportantTasks = createSelector(selectTasksArray, (tasks) =>
  tasks.filter((task) => task.isImportant)
);

export const selectDailyTasks = createSelector(selectTasksArray, (tasks) =>
  tasks.filter((task) => isSameDate(task.toDateTimestamp))
);

export const selectTasksByTimeFilter = createSelector(
  [selectTasksArray, selectTimeFilter],
  (tasks, timeFilter) => filterTasksByTime(tasks, timeFilter)
);

export const selectTasksLengthByTimeFilter = createSelector(
  [selectTasksByTimeFilter],
  (tasks) => tasks.length
);

export const selectTasksByTitle = (title: string) =>
  createSelector([selectTasksByTimeFilter], (tasks) =>
    tasks.filter((task) => task.title.includes(title))
  );

export const selectTasksByCategory = (category: string) =>
  createSelector([selectTasksByTimeFilter], (tasks) =>
    tasks.filter((task) => task.category === category)
  );

export const selectTasksLengthByCategory = (category: string) =>
  createSelector(selectTasksByCategory(category), (tasksByCategory) => tasksByCategory.length);

export const selectDoneTasksByCategory = (category: string) =>
  createSelector(selectTasksByCategory(category), (tasksByCategory) =>
    tasksByCategory.filter((task) => task.isDone)
  );

export const selectUndoneTasksByCategory = (category: string) =>
  createSelector(selectTasksByCategory(category), (tasksByCategory) =>
    tasksByCategory.filter((task) => !task.isDone)
  );
