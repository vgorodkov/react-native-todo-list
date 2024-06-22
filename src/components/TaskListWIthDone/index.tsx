import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

import { TodoTask } from '@/types/todo';

import { TaskList } from '../TaskList';
import { TOP_MARGIN } from './constants';
import { DoneTaskListHeader } from './DoneTaskListHeader';
import { styles } from './styles';

interface TaskListWithDoneProps {
  doneTasks: TodoTask[];
  undoneTasks: TodoTask[];
}

export const TaskListWithDone = ({ doneTasks, undoneTasks }: TaskListWithDoneProps) => {
  const { height } = useWindowDimensions();

  const BOTTOM_EDGE = 0;
  const TOP_EDGE = height * 0.8 - TOP_MARGIN;

  const listHeight = useSharedValue(BOTTOM_EDGE);

  const onPress = () => {
    if (listHeight.value === BOTTOM_EDGE) {
      listHeight.value = withTiming(TOP_EDGE);
    } else {
      listHeight.value = withTiming(BOTTOM_EDGE);
    }
  };

  return (
    <View style={styles.todosContainer}>
      <TaskList tasks={undoneTasks} />
      <Animated.View style={{ height: listHeight }}>
        <DoneTaskListHeader doneTasksAmount={doneTasks.length} onPress={onPress} />
        <TaskList tasks={doneTasks} />
      </Animated.View>
    </View>
  );
};
