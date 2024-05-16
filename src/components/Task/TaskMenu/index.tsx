import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useAppDispatch } from '@/store/hooks';
import { deleteTodo } from '@/store/slices/todosSlice';

import { styles } from './styles';

export const TaskMenu = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const deleteTask = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.taskMenu}>
      <Pressable>
        <Text>add subtasks</Text>
      </Pressable>
      <Pressable>
        <Text>edit task</Text>
      </Pressable>
      <Pressable onPress={deleteTask}>
        <Text>delete task</Text>
      </Pressable>
    </View>
  );
};
