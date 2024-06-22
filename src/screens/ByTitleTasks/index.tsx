import React from 'react';

import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectTasksByTitle } from '@/store/slices/taskSlice/selectors';

import { ByTitleTasksScreenProps } from './types';

export const ByTitleTasksScreen = ({ route }: ByTitleTasksScreenProps) => {
  const { taskQuery } = route.params;

  const byTitleTasks = useAppSelector(selectTasksByTitle(taskQuery));

  return (
    <ListGradientWrapper>
      <TaskList tasks={byTitleTasks} />
    </ListGradientWrapper>
  );
};
