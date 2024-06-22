import { TodoSubtask } from '@/types/todo';

export interface SubtaskProps extends TodoSubtask {
  taskId: string;
  index: number;
}
