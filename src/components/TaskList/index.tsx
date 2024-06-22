import React from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { EmptyList } from '@/components/EmptyList';

import { renderTasks } from './renderTasks';
import { styles } from './styles';
import { TaskListProps } from './types';

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <Animated.FlatList
      testID="TaskList"
      ListEmptyComponent={<EmptyList message="No tasks yet" />}
      showsVerticalScrollIndicator={false}
      data={tasks}
      itemLayoutAnimation={LinearTransition}
      renderItem={renderTasks}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};
