import React from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { Text } from '@/components/UI';

import { renderTodos } from './renderTodos';
import { styles } from './styles';
import { TodoListProps } from './types';

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Animated.FlatList
      ListEmptyComponent={<Text>No todos yet</Text>}
      showsVerticalScrollIndicator={false}
      data={todos}
      itemLayoutAnimation={LinearTransition}
      renderItem={renderTodos}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};
