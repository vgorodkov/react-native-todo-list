import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { RootStackRoutes } from '@/constants/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { deleteTask } from '@/store/slices/taskSlice';
import { selectTaskById } from '@/store/slices/taskSlice/selectors';

import { styles } from './styles';
import { TaskMenuProps } from './types';

export const TaskMenu = ({ id, closeTaskMenu }: TaskMenuProps) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const selectedTask = useAppSelector(selectTaskById(id));

  const { isDone } = selectedTask;

  const onDeleteTaskBtn = () => {
    closeTaskMenu();
    dispatch(deleteTask(id));
  };

  const onEditTaskBtn = () => {
    closeTaskMenu();

    navigation.navigate(RootStackRoutes.TASK_MODAL, {
      category: selectedTask.category,
      task: selectedTask,
    });
  };

  const onAddSubtasksBtn = () => {
    closeTaskMenu();
    navigation.navigate(RootStackRoutes.TASK_MODAL, {
      category: selectedTask.category,
      task: selectedTask,
      initialStep: 1,
    });
  };

  return (
    <View style={styles.taskMenu}>
      {!isDone && (
        <>
          <Pressable onPress={onAddSubtasksBtn}>
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
