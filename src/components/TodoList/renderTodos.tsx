import { Task } from '@/components/Task';
import { TodoTask } from '@/types/todo';

export const renderTodos = ({ item }: { item: TodoTask }) => {
  const { id, title, description, isDone, isImportant, category, toDateTimestamp, subtasks } = item;
  return (
    <Task
      id={id}
      title={title}
      description={description}
      isDone={isDone}
      isImportant={isImportant}
      category={category}
      toDateTimestamp={toDateTimestamp}
      subtasks={subtasks}
    />
  );
};
