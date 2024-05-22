export const getTimeFromDate = (date: Date) => {
  return date.toTimeString().slice(0, 5);
};
