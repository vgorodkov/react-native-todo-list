import React from 'react';

import { TodoList } from '@/components/TodoList';
import { useAppSelector } from '@/store/hooks';
import { selectDailyTodos } from '@/store/slices/todosSlice/selectors';

export const DailyTodosScreen = () => {
  const dailyTodos = useAppSelector((state) => selectDailyTodos(state));
  return <TodoList todos={dailyTodos} />;
};
