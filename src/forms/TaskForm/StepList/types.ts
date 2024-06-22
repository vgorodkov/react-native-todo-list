import { ReactNode } from 'react';

import { TodoTask } from '@/types/todo';

export interface StepListProps {
  children: ReactNode[] | ReactNode;
  initialStep?: number;
  category: string;
  task?: TodoTask;
}
