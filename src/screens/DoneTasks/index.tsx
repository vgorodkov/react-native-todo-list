import React from 'react';

import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectDoneTasks } from '@/store/slices/taskSlice/selectors';

export const DoneTasksScreen = () => {
  const doneTasks = useAppSelector((state) => selectDoneTasks(state));
  return <TaskList tasks={doneTasks} />;
};
