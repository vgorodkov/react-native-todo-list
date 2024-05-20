import React from 'react';

import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectImportantTasks } from '@/store/slices/taskSlice/selectors';

export const ImportantTasksScreen = () => {
  const importantTasks = useAppSelector(selectImportantTasks);

  return (
    <ListGradientWrapper>
      <TaskList tasks={importantTasks} />
    </ListGradientWrapper>
  );
};
