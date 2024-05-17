import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

import { DoneTaskListHeader } from '@/components/DoneTaskListHeader';
import { TaskAddButton } from '@/components/TaskAddButton';
import { TodoList } from '@/components/TodoList';
import { useAppSelector } from '@/store/hooks';
import { selectTodosByCategory } from '@/store/slices/todosSlice/selectors';

import { styles } from './styles';

//TODO: type navigation route params
export const CategoryTodosScreen = ({ route }: any) => {
  const { category } = route.params;
  const { height } = useWindowDimensions();
  const categoryTodos = useAppSelector((state) => selectTodosByCategory(state, category));
  const doneTodos = categoryTodos.filter((t) => t.isDone);
  const undoneTodos = categoryTodos.filter((t) => !t.isDone);

  const BOTTOM_EDGE = height * 0.8 - 72;
  const TOP_EDGE = 0;
  const listHeight = useSharedValue(BOTTOM_EDGE);

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
          <TodoList todos={undoneTodos} />
        </Animated.View>
        <DoneTaskListHeader onPress={onPress} />
        <TodoList todos={doneTodos} />
      </View>
      <View style={styles.addTodosContainer}>
        <TaskAddButton />
      </View>
    </>
  );
};
