import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/UI';
import { Checkbox } from '@/components/UI/CheckBox';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { setTaskIsDone, setTaskIsUndone } from '@/store/slices/taskSlice';
import { getTimeFromISO } from '@/utils/getTimeFromISO';

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

  const closeTaskMenu = () => {
    setIsTaskMenuShown(false);
  };

  return (
    <Pressable
      testID={`Task.${title}.ExpandBtn`}
      disabled={disabled}
      onPress={onTaskPress}
      style={styles.task}
    >
      <View style={styles.timeRange}>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          {getTimeFromISO(timeRange.from)}
        </Text>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          {getTimeFromISO(timeRange.to)}
        </Text>
      </View>
      <Checkbox testID={`Task.${title}.Checkbox`} isDone={isDone} onPress={onCheckBoxPress} />
      <View style={styles.todoDescription}>
        <Text color={colors.primaryText} variant={TextVariant.body_large}>
          {title}
        </Text>
        <Text color={colors.primaryText} variant={TextVariant.body_small}>
          {description}
        </Text>
      </View>
      {isTaskMenuShown && <TaskMenu closeTaskMenu={closeTaskMenu} id={id} />}
      <Pressable testID={`Task.${title}.MenuBtn`} onPress={onTaskMenuToggleBtn}>
        <Image style={styles.taskMenuToggleBtn} source={require('@/assets/icons/more.png')} />
      </Pressable>
    </Pressable>
  );
};
