import { TaskState } from '@/store/slices/taskSlice';
import { TimeFilter } from '@/types/timefilter';

import { getDaysFromNow } from './getDaysFromNow';
import { isSameDate } from './isSameDate';

const WEEK = 7;
const MONTH = 30;

export const filterTasksByTime = (tasks: TaskState, timeFilter: TimeFilter) => {
  const taskArray = Object.values(tasks);

  switch (timeFilter) {
    case 'Today':
      return taskArray.filter((task) => isSameDate(task.toDateTimestamp));
    case 'Week':
      return taskArray.filter((task) => getDaysFromNow(task.toDateTimestamp) <= WEEK);
    case 'Month':
      return taskArray.filter((task) => getDaysFromNow(task.toDateTimestamp) <= MONTH);
    default:
      return taskArray;
  }
};
