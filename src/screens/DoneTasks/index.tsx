import React from 'react';

import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectDoneTasks } from '@/store/slices/taskSlice/selectors';

export const DoneTasksScreen = () => {
  const doneTasks = useAppSelector(selectDoneTasks);

  return (
    <ListGradientWrapper>
      <TaskList tasks={doneTasks} />
    </ListGradientWrapper>
  );
};
