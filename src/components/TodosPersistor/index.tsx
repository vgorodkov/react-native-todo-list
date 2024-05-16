import { ReactNode, useEffect } from 'react';
import { Text } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { isTodosLoadingSelector } from '@/store/slices/todosSlice/selectors';
import { loadTodos } from '@/store/slices/todosSlice/todosThunk';

export const TodosPersistor = ({ children }: { children: ReactNode }) => {
  const isTodosLoading = useAppSelector(isTodosLoadingSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (isTodosLoading) {
    return <Text>Loading</Text>;
  }

  return children;
};
