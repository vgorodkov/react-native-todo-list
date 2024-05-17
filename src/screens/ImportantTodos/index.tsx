import React from 'react';

import { TodoList } from '@/components/TodoList';
import { useAppSelector } from '@/store/hooks';
import { selectImportantTodos } from '@/store/slices/todosSlice/selectors';

export const ImportantTodosScreen = () => {
  const importantTodos = useAppSelector((state) => selectImportantTodos(state));

  return <TodoList todos={importantTodos} />;
};
