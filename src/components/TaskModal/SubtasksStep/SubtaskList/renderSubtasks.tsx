import { TodoSubtask } from '@/types/todo';

import { SelectedSubtask } from './SelectedSubtask';

export const renderSelectedSubtasks = ({ item, index }: { item: TodoSubtask; index: number }) => {
  return <SelectedSubtask title={item.title} isDone={item.isDone} id={item.id} index={index} />;
};
