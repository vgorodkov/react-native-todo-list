import React from 'react';

import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectImportantTasks } from '@/store/slices/taskSlice/selectors';

export const ImportantTasksScreen = () => {
  const importantTasks = useAppSelector((state) => selectImportantTasks(state));

  return <TaskList tasks={importantTasks} />;
};
