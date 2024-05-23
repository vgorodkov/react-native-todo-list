import React from 'react';
import { View } from 'react-native';

import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskListWithDone } from '@/components/TaskListWIthDone';
import { AddIcon } from '@/components/UI/AddIcon';
import { useAppSelector } from '@/store/hooks';
import {
  selectDoneTasksByCategory,
  selectUndoneTasksByCategory,
} from '@/store/slices/taskSlice/selectors';

import { styles } from './styles';
import { CategoryTasksScreenProps } from './types';

export const CategoryTasksScreen = ({ route, navigation }: CategoryTasksScreenProps) => {
  const { category } = route.params;

  const doneTasks = useAppSelector(selectDoneTasksByCategory(category));
  const undoneTasks = useAppSelector(selectUndoneTasksByCategory(category));

  const onAddIconPress = () => {
    navigation.navigate('TaskModal', {
      category,
    });
  };

  return (
    <ListGradientWrapper>
      <TaskListWithDone doneTasks={doneTasks} undoneTasks={undoneTasks} />
      <View style={styles.addTodosContainer}>
        <AddIcon testID="Task.AddIcon" onAddIconPress={onAddIconPress} />
      </View>
    </ListGradientWrapper>
  );
};
