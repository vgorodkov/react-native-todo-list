import { TaskModalFormValues, TodoTask } from '@/types/todo';

export const getDefaultValues = (task?: TodoTask): TaskModalFormValues => ({
  title: task?.title ?? '',
  description: task?.description ?? '',
  subtask: '',
  timeRange: {
    from: new Date(task?.timeRange.from ?? Date.now()),
    to: new Date(task?.timeRange.to ?? Date.now()),
  },
});
