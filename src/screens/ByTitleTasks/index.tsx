import React from 'react';

import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectTasksByTitle } from '@/store/slices/taskSlice/selectors';

import { ByTitleTasksScreenProps } from './types';

export const ByTitleTasksScreen = ({ route }: ByTitleTasksScreenProps) => {
  const { taskQuery } = route.params;

  const byTitleTasks = useAppSelector((state) => selectTasksByTitle(state, taskQuery));

  return <TaskList tasks={byTitleTasks} />;
};
