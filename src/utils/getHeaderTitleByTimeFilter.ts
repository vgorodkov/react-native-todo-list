import { TimeFilter } from '@/types/timefilter';

const titlesByTimeFilter: Record<TimeFilter, string> = {
  Today: "Today's tasks",
  Week: "Week's tasks",
  Month: "Month's tasks",
};

export const getHeaderTitleByTimeFilter = (timeFilter: TimeFilter) => {
  return titlesByTimeFilter[timeFilter];
};
