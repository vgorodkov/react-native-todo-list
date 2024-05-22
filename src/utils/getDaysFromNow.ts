export const getDaysFromNow = (timestamp: number) => {
  const now = Date.now();
  const nowZero = new Date(now).setHours(0, 0, 0, 0);
  const diffInTime = now - timestamp;
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  if (nowZero > timestamp) {
    return -1;
  }
  return diffInDays;
};
