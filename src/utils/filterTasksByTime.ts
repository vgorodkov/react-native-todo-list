import { TimeFilter } from '@/types/timefilter';
import { TodoTask } from '@/types/todo';

import { getDaysFromNow } from './getDaysFromNow';
import { isSameDate } from './isSameDate';

const WEEK = 7;
const MONTH = 30;

export const filterTasksByTime = (tasks: TodoTask[], timeFilter: TimeFilter) => {
  switch (timeFilter) {
    case 'Today':
      return tasks.filter((task) => isSameDate(task.toDateTimestamp));
    case 'Week':
      return tasks.filter((task) => getDaysFromNow(task.toDateTimestamp) <= WEEK);
    case 'Month':
      return tasks.filter((task) => getDaysFromNow(task.toDateTimestamp) <= MONTH);
    default:
      return tasks;
  }
};
