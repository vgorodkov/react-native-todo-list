import React from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { EmptyList } from './EmptyList';
import { renderTasks } from './renderTasks';
import { styles } from './styles';
import { TaskListProps } from './types';

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <Animated.FlatList
      ListEmptyComponent={EmptyList}
      showsVerticalScrollIndicator={false}
      data={tasks}
      itemLayoutAnimation={LinearTransition}
      renderItem={renderTasks}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};
