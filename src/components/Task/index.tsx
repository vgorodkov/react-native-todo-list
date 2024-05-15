import React, { useState } from 'react';
import { styles } from './styles';
import { Subtask } from '../Subtask';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { TodoTask } from '@/types/todo';
import { TaskContent } from './TaskContent';

export const Task = ({ title, description, isDone, subtasks }: TodoTask) => {
  const [isSubtasksShown, setIsSubtaskShown] = useState(false);

  const onTaskPress = () => {
    setIsSubtaskShown((prev) => !prev);
  };

  return (
    <Animated.View layout={LinearTransition} style={styles.taskContainer}>
      <TaskContent
        title={title}
        description={description}
        isDone={isDone}
        onTaskPress={onTaskPress}
      />
      {isSubtasksShown && (
        <Animated.View entering={FadeIn.delay(150)} exiting={FadeOut} style={{ gap: 16 }}>
          {subtasks?.map((subtask) => (
            <Subtask
              key={subtask.id}
              id={subtask.id}
              isDone={subtask.isDone}
              title={subtask.title}
            />
          ))}
        </Animated.View>
      )}
    </Animated.View>
  );
};
