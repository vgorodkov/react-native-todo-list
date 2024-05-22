import { TodoSubtask } from '@/types/todo';

export interface SelectedSubtaskProps extends TodoSubtask {
  index: number;
}
