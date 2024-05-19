export const isSameDate = (timestamp: number) => {
  const date1 = new Date(timestamp);
  const date2 = new Date(Date.now());
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1.getTime() === date2.getTime();
};
