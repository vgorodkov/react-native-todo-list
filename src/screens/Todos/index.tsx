import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

import { DoneTaskListHeader } from '@/components/DoneTaskListHeader';
import { TaskAddButton } from '@/components/TaskAddButton';
import { TodoList } from '@/components/TodoList';
import { todos } from '@/data/todos';

import { styles } from './styles';

export const TodosScreen = () => {
  const { height } = useWindowDimensions();

  const BOTTOM_EDGE = height * 0.8 - 80;
  const TOP_EDGE = 0;
  const translateY = useSharedValue(BOTTOM_EDGE);

  const doneTodos = todos.filter((todo) => todo.isDone);
  const undoneTodos = todos.filter((todo) => !todo.isDone);

  const onPress = () => {
    if (translateY.value === BOTTOM_EDGE) {
      translateY.value = withTiming(TOP_EDGE);
    } else {
      translateY.value = withTiming(BOTTOM_EDGE);
    }
  };

  return (
    <>
      <View style={styles.todosContainer}>
        <TodoList todos={undoneTodos} />
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.doneTodosContainer,
            {
              transform: [{ translateY: translateY }],
            },
          ]}
        >
          <DoneTaskListHeader onPress={onPress} />
          <TodoList todos={doneTodos} />
        </Animated.View>
      </View>
      <View style={styles.addTodosContainer}>
        <TaskAddButton />
      </View>
    </>
  );
};
