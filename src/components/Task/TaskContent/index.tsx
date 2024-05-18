import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/UI';
import { Checkbox } from '@/components/UI/CheckBox';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { setTaskIsDone, setTaskIsUndone } from '@/store/slices/taskSlice';
import { formatTime } from '@/utils/formatTime';

import { TaskMenu } from '../TaskMenu';
import { styles } from './styles';
import { TaskContentProps } from './types';

export const TaskContent = ({
  title,
  description,
  isDone,
  onTaskPress,
  id,
  timeRange,
  disabled,
}: TaskContentProps) => {
  const dispatch = useAppDispatch();

  const [isTaskMenuShown, setIsTaskMenuShown] = useState(false);

  const onCheckBoxPress = () => {
    if (isDone) {
      dispatch(setTaskIsUndone(id));
    } else {
      dispatch(setTaskIsDone(id));
    }
  };

  const onTaskMenuToggleBtn = () => {
    setIsTaskMenuShown((prev) => !prev);
  };

  return (
    <Pressable disabled={disabled} onPress={onTaskPress} style={styles.task}>
      <View style={styles.timeRange}>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          {formatTime(timeRange.from)}
        </Text>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          {formatTime(timeRange.to)}
        </Text>
      </View>
      <Checkbox isDone={isDone} onPress={onCheckBoxPress} />
      <View style={styles.todoDescription}>
        <Text color={colors.primaryText} variant={TextVariant.body_large}>
          {title}
        </Text>
        <Text color={colors.primaryText} variant={TextVariant.body_small}>
          {description}
        </Text>
      </View>
      {isTaskMenuShown && <TaskMenu isDone={isDone} id={id} />}
      <Pressable onPress={onTaskMenuToggleBtn}>
        <Image style={styles.taskMenuToggleBtn} source={require('@/assets/icons/more.png')} />
      </Pressable>
    </Pressable>
  );
};
