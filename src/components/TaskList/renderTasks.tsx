import { Task } from '@/components/Task';
import { TodoTask } from '@/types/todo';

export const renderTasks = ({ item }: { item: TodoTask }) => {
  const {
    id,
    title,
    description,
    isDone,
    isImportant,
    category,
    toDateTimestamp,
    subtasks,
    timeRange,
  } = item;
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
      timeRange={timeRange}
    />
  );
};
