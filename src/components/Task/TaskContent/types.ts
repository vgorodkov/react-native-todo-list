import { TodoTask } from '@/types/todo';

export interface TaskContentProps extends Pick<TodoTask, 'title' | 'description' | 'isDone'> {
  onTaskPress: () => void;
}
