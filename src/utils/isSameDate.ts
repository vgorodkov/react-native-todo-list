export const isSameDate = (timestamp1: number, timestamp2: number) => {
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1.getTime() === date2.getTime();
};
