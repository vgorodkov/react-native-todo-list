import { TodoTask } from '@/types/todo';
import React from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { Task } from '../Task';
import { styles } from './styles';
import { TodoListProps } from './types';

const renderTodos = ({ item }: { item: TodoTask }) => {
  const { id, title, description, isDone, isImportant, category, toDateTimestamp, subtasks } = item;
  return (
    <Task
      id={id}
      title={title}
      description={description}
      isDone={isDone}
      isImportant={isImportant}
      category={category}
      toDateTimestamp={toDateTimestamp}
      subtasks={subtasks}
    />
  );
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Animated.FlatList
      showsVerticalScrollIndicator={false}
      data={todos}
      itemLayoutAnimation={LinearTransition}
      renderItem={renderTodos}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};
