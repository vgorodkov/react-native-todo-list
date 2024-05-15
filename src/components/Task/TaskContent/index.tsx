import { Image, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { Checkbox } from '@/components/UI/CheckBox';
import { colors } from '@/constants/colors';
import { styles } from './styles';
import { TaskMenu } from '../TaskMenu';
import { TaskContentProps } from './types';

export const TaskContent = ({ title, description, isDone, onTaskPress }: TaskContentProps) => {
  const [isTaskMenuShown, setIsTaskMenuShown] = useState(false);

  const onCheckBoxPress = () => {};

  const onTaskMenuToggleBtn = () => {
    setIsTaskMenuShown((prev) => !prev);
  };

  return (
    <Pressable onPress={onTaskPress} style={styles.task}>
      <View style={styles.timeRange}>
        <Text variant={TextVariant.label_small}>10:00 am</Text>
        <Text variant={TextVariant.label_small}>05:00 pm</Text>
      </View>
      <Checkbox isDone={isDone} onPress={onCheckBoxPress} />
      <View style={styles.todoDescription}>
        <Text color={colors.primaryText} variant={TextVariant.body_large}>
          {title}
        </Text>
        <Text variant={TextVariant.body_small}>{description}</Text>
      </View>
      {isTaskMenuShown && <TaskMenu />}
      <Pressable onPress={onTaskMenuToggleBtn}>
        <Image style={styles.taskMenuToggleBtn} source={require('@/assets/icons/more.png')} />
      </Pressable>
    </Pressable>
  );
};
