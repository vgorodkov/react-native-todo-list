import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setInitialTaskState } from '@/store/slices/taskModalSlice';
import { deleteTask } from '@/store/slices/taskSlice';

import { styles } from './styles';

export const TaskMenu = ({ id, isDone }: { id: string; isDone: boolean }) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const selectedTodo = useAppSelector((state) => state.task[id]);

  const onDeleteTaskBtn = () => {
    dispatch(deleteTask(id));
  };

  const onEditTaskBtn = () => {
    dispatch(setInitialTaskState(selectedTodo));
    navigation.navigate('TaskModal', {
      category: selectedTodo.category,
      id,
    });
  };

  return (
    <View style={styles.taskMenu}>
      {!isDone && (
        <>
          <Pressable>
            <Text>add subtasks</Text>
          </Pressable>
          <Pressable onPress={onEditTaskBtn}>
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
