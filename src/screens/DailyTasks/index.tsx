import React from 'react';

import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectDailyTasks } from '@/store/slices/taskSlice/selectors';

export const DailyTasksScreen = () => {
  const dailyTasks = useAppSelector((state) => selectDailyTasks(state));
  return <TaskList tasks={dailyTasks} />;
};
