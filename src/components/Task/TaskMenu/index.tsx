import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useAppDispatch } from '@/store/hooks';
import { deleteTask } from '@/store/slices/taskSlice';

import { styles } from './styles';

export const TaskMenu = ({ id, isDone }: { id: string; isDone: boolean }) => {
  const dispatch = useAppDispatch();

  const onDeleteTaskBtn = () => {
    dispatch(deleteTask(id));
  };

  return (
    <View style={styles.taskMenu}>
      {!isDone && (
        <>
          <Pressable>
            <Text>add subtasks</Text>
          </Pressable>
          <Pressable>
            <Text>edit task</Text>
          </Pressable>
        </>
      )}
      <Pressable onPress={onDeleteTaskBtn}>
        <Text>delete task</Text>
      </Pressable>
    </View>
  );
};
