export const getDaysFromNow = (timestamp: number) => {
  const now = Date.now();
  const diffInTime = Math.abs(now - timestamp);
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  return diffInDays;
};
