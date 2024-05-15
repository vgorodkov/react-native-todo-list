export interface TodoSubtask extends Pick<TodoTask, 'id' | 'title' | 'isDone'> {}

export interface TodoTask {
  id: string;
  title: string;
  description: string;
  category: string;
  toDateTimestamp: number;
  //TODO: replace timerange
  timeRange?: unknown;
  isDone: boolean;
  isImportant: boolean;
  subtasks?: TodoSubtask[];
}
