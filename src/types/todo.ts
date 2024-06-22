export interface TodoSubtask extends Pick<TodoTask, 'id' | 'title' | 'isDone'> {}

export interface TodoTask {
  id: string;
  title: string;
  description: string;
  category: string;
  toDateTimestamp: number;
  timeRange: {
    from: string;
    to: string;
  };
  isDone: boolean;
  isImportant: boolean;
  subtasks: TodoSubtask[];
}

export interface TodoTaskDTO extends Omit<TodoTask, 'id'> {}

export interface TodoSubtaskDTO extends Omit<TodoSubtask, 'id'> {}

export interface TodoTaskCategory {
  title: string;
  img: number;
  backgroundColor: string;
}

export interface TaskModalFormValues extends Pick<TodoTask, 'title' | 'description'> {
  subtask: string;
  timeRange: {
    from: Date;
    to: Date;
  };
}
