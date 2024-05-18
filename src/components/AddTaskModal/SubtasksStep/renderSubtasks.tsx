import { SelectedSubtask } from '@/components/AddTaskModal/SubtasksStep/SelectedSubtask';
import { TodoSubtask } from '@/types/todo';

export const renderSelectedSubtasks = ({ item, index }: { item: TodoSubtask; index: number }) => {
  return <SelectedSubtask title={item.title} isDone={item.isDone} id={item.id} index={index} />;
};
