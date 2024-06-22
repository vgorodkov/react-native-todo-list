import { TimeFilter } from '@/types/timefilter';

export const formatTimeFilterTitle = (timeFilter: TimeFilter) => {
  if (timeFilter === 'Today') {
    return 'today!';
  } else if (timeFilter === 'Week') {
    return 'this week!';
  } else {
    return 'this month!';
  }
};
