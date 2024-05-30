import { TodoTask } from '@/types/todo';

export interface FormContext extends Pick<TodoTask, 'title' | 'description'> {
  subtask: string;
  timeRange: {
    from: Date;
    to: Date;
  };
}
