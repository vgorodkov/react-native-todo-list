import { ReactNode, useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { revalidateTasks } from '@/store/slices/taskSlice';

export const TodosRevalidator = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(revalidateTasks());
  }, [dispatch]);

  return children;
};
