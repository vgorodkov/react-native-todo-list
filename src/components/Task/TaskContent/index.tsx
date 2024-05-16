import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/UI';
import { Checkbox } from '@/components/UI/CheckBox';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppDispatch } from '@/store/hooks';
import { toggleTaskIsDone } from '@/store/slices/todosSlice';

import { TaskMenu } from '../TaskMenu';
import { styles } from './styles';
import { TaskContentProps } from './types';

export const TaskContent = ({ title, description, isDone, onTaskPress, id }: TaskContentProps) => {
  const dispatch = useAppDispatch();

  const [isTaskMenuShown, setIsTaskMenuShown] = useState(false);

  const onCheckBoxPress = () => {
    dispatch(toggleTaskIsDone(id));
  };

  const onTaskMenuToggleBtn = () => {
    setIsTaskMenuShown((prev) => !prev);
  };

  return (
    <Pressable onPress={onTaskPress} style={styles.task}>
      <View style={styles.timeRange}>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          10:00 am
        </Text>
        <Text color={colors.primaryText} variant={TextVariant.label_small}>
          05:00 pm
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
      {isTaskMenuShown && <TaskMenu id={id} />}
      <Pressable onPress={onTaskMenuToggleBtn}>
        <Image style={styles.taskMenuToggleBtn} source={require('@/assets/icons/more.png')} />
      </Pressable>
    </Pressable>
  );
};
