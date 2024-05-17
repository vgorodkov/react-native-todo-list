import React from 'react';

import { TodoList } from '@/components/TodoList';
import { useAppSelector } from '@/store/hooks';
import { selectDoneTodos } from '@/store/slices/todosSlice/selectors';

export const DoneTodosScreen = () => {
  const doneTodos = useAppSelector((state) => selectDoneTodos(state));
  return <TodoList todos={doneTodos} />;
};
