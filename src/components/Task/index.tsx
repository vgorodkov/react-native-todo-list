import React, { memo, useState } from 'react';
import { View } from 'react-native';
import Animated, { LinearTransition, SlideInLeft, SlideOutRight } from 'react-native-reanimated';

import { Subtask } from '@/components/Subtask';
import { TodoTask } from '@/types/todo';

import { styles } from './styles';
import { TaskContent } from './TaskContent';

export const Task = memo(({ title, description, isDone, subtasks, timeRange, id }: TodoTask) => {
  const [isSubtasksShown, setIsSubtaskShown] = useState(false);

  const hasSubtasks = subtasks.length > 0;

  const onTaskPress = () => {
    setIsSubtaskShown((prev) => !prev);
  };

  return (
    <Animated.View
      testID={`Task.${title}`}
      layout={LinearTransition}
      exiting={SlideOutRight}
      entering={SlideInLeft}
      style={styles.taskContainer}
    >
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
          {subtasks?.map((subtask, index) => {
            const { id: subtaskId, title: subtaskTitle, isDone: subtaskIsDone } = subtask;
            return (
              <Subtask
                index={index}
                taskId={id}
                key={subtaskId}
                title={subtaskTitle}
                id={subtaskId}
                isDone={subtaskIsDone}
              />
            );
          })}
        </View>
      )}
    </Animated.View>
  );
});
