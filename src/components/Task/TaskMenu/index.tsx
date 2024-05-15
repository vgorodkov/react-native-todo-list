import { Pressable, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';

export const TaskMenu = () => {
  return (
    <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.taskMenu}>
      <Pressable>
        <Text>add subtasks</Text>
      </Pressable>
      <Pressable>
        <Text>edit task</Text>
      </Pressable>
      <Pressable>
        <Text>delete task</Text>
      </Pressable>
    </Animated.View>
  );
};
