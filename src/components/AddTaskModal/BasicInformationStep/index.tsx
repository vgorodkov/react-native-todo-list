import React from 'react';

import { Input } from '@/components/UI';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { handleTextInfoInput } from '@/store/slices/taskModalSlice';

import { ListItem } from '../ListItem';
import { styles } from './styles';

export const BasicInformationStep = () => {
  const dispatch = useAppDispatch();

  const title = useAppSelector((state) => state.taskModal.title);
  const desription = useAppSelector((state) => state.taskModal.description);

  const handleTitle = (text: string) => {
    dispatch(handleTextInfoInput({ mode: 'title', text }));
  };
  const handleDescription = (text: string) => {
    dispatch(handleTextInfoInput({ mode: 'description', text }));
  };

  return (
    <ListItem style={styles.container}>
      <Input value={title} onChangeText={handleTitle} placeholder="Task title" />
      <Input value={desription} onChangeText={handleDescription} placeholder="Task description" />
    </ListItem>
  );
};
