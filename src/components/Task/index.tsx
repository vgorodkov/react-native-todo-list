import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { Subtask } from '@/components/Subtask';
import { TodoTask } from '@/types/todo';

import { styles } from './styles';
import { TaskContent } from './TaskContent';

export const Task = ({ title, description, isDone, subtasks, timeRange, id }: TodoTask) => {
  const [isSubtasksShown, setIsSubtaskShown] = useState(false);

  const hasSubtasks = subtasks.length > 0;

  const onTaskPress = () => {
    setIsSubtaskShown((prev) => !prev);
  };

  return (
    <Animated.View layout={LinearTransition} style={[styles.taskContainer]}>
      <TaskContent
        id={id}
        title={title}
        description={description}
        isDone={isDone}
        onTaskPress={onTaskPress}
        timeRange={timeRange}
        disabled={!hasSubtasks}
      />
      {isSubtasksShown && (
        <View style={styles.subtaskContainer}>
          {subtasks?.map((subtask, index) => (
            <Subtask
              index={index}
              taskId={id}
              key={subtask.id}
              title={subtask.title}
              id={subtask.id}
              isDone={subtask.isDone}
            />
          ))}
        </View>
      )}
    </Animated.View>
  );
};
