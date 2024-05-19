export const formatTimeFilterTitle = (timeFilter: 'Today' | 'Week' | 'Month') => {
  if (timeFilter === 'Today') {
    return 'today!';
  } else if (timeFilter === 'Week') {
    return 'this week!';
  } else {
    return 'this month!';
  }
};
