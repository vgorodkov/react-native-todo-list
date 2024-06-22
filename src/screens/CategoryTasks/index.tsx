import React from 'react';
import { View } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { ListGradientWrapper } from '@/components/ListGradientWrapper';
import { TaskListWithDone } from '@/components/TaskListWIthDone';
import { Icon } from '@/components/UI/Icon';
import { RootStackRoutes } from '@/constants/navigation';
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
    navigation.navigate(RootStackRoutes.TASK_MODAL, {
      category,
    });
  };

  return (
    <ListGradientWrapper>
      <TaskListWithDone doneTasks={doneTasks} undoneTasks={undoneTasks} />
      <View style={styles.addTodosContainer}>
        <Icon
          style={commonStyles.addIcon}
          icon={require('@/assets/icons/todo_plus.png')}
          testID="Task.AddIcon"
          onIconPress={onAddIconPress}
        />
      </View>
    </ListGradientWrapper>
  );
};
