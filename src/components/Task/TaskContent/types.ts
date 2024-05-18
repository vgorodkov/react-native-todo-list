import { TodoTask } from '@/types/todo';

export interface TaskContentProps
  extends Pick<TodoTask, 'title' | 'description' | 'isDone' | 'id' | 'timeRange'> {
  onTaskPress: () => void;
  disabled: boolean;
}
