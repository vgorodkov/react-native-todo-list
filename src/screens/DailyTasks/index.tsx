import React from 'react';

import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectDailyTasks } from '@/store/slices/taskSlice/selectors';

export const DailyTasksScreen = () => {
  const dailyTasks = useAppSelector(selectDailyTasks);

  return (
    <ListGradientWrapper>
      <TaskList tasks={dailyTasks} />
    </ListGradientWrapper>
  );
};
