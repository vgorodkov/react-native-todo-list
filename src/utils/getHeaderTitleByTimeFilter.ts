import { TimeFilter } from '@/types/timefilter';

export const getHeaderTitleByTimeFilter = (timeFilter: TimeFilter) => {
  switch (timeFilter) {
    case 'Today':
      return "Today's tasks";
    case 'Week':
      return "Week's tasks";
    case 'Month':
      return "Month's tasks";
    default:
      return 'Tasks';
  }
};
