import React, { memo, useState } from 'react';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';

import { TodoTask } from '@/types/todo';

import { Subtask } from '../Subtask';
import { styles } from './styles';
import { TaskContent } from './TaskContent';

export const Task = memo(({ title, description, isDone, subtasks, id }: TodoTask) => {
  const [isSubtasksShown, setIsSubtaskShown] = useState(false);

  const onTaskPress = () => {
    setIsSubtaskShown((prev) => !prev);
  };

  return (
    <Animated.View layout={LinearTransition} style={styles.taskContainer}>
      <TaskContent
        id={id}
        title={title}
        description={description}
        isDone={isDone}
        onTaskPress={onTaskPress}
      />
      {isSubtasksShown && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={{ gap: 16 }}>
          {subtasks?.map((subtask) => (
            <Subtask
              key={subtask.id}
              id={subtask.id}
              taskId={id}
              isDone={subtask.isDone}
              title={subtask.title}
            />
          ))}
        </Animated.View>
      )}
    </Animated.View>
  );
});
