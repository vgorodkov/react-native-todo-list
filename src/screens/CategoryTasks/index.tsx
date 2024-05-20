import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

import { AddIcon } from '@/components/AddIcon';
import { DoneTaskListHeader } from '@/components/DoneTaskListHeader';
import { TaskList } from '@/components/TaskList';
import { useAppSelector } from '@/store/hooks';
import { selectTasksByCategory } from '@/store/slices/taskSlice/selectors';

import { styles } from './styles';
import { CategoryTasksScreenProps } from './types';

export const CategoryTasksScreen = ({ route, navigation }: CategoryTasksScreenProps) => {
  const { category } = route.params;
  const { height } = useWindowDimensions();
  const categoryTasks = useAppSelector((state) => selectTasksByCategory(state, category));
  const doneTasks = categoryTasks.filter((t) => t.isDone);
  const undoneTasks = categoryTasks.filter((t) => !t.isDone);

  const BOTTOM_EDGE = height * 0.8 - 72;
  const TOP_EDGE = 0;
  const listHeight = useSharedValue(BOTTOM_EDGE);

  const onAddIconPress = () => {
    navigation.navigate('TaskModal', {
      category,
    });
  };

  const onPress = () => {
    if (listHeight.value === BOTTOM_EDGE) {
      listHeight.value = withTiming(TOP_EDGE);
    } else {
      listHeight.value = withTiming(BOTTOM_EDGE);
    }
  };

  return (
    <>
      <View style={styles.todosContainer}>
        <Animated.View style={{ height: listHeight }}>
          <TaskList tasks={undoneTasks} />
        </Animated.View>
        <DoneTaskListHeader doneTasksAmount={doneTasks.length} onPress={onPress} />
        <TaskList tasks={doneTasks} />
      </View>
      <View style={styles.addTodosContainer}>
        <AddIcon onAddIconPress={onAddIconPress} />
      </View>
    </>
  );
};
