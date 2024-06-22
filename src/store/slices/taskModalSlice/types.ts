import { TodoTask } from '@/types/todo';

export interface TaskModal
  extends Pick<TodoTask, 'toDateTimestamp' | 'isDone' | 'isImportant' | 'subtasks'> {}

export interface TaskModalState {
  task: TaskModal;
}
