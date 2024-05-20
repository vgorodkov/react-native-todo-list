import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppSelector } from '@/store/hooks';
import { selectTasksLengthByCategory } from '@/store/slices/taskSlice/selectors';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';

import { styles } from './styles';
import { TaskCategoryProps } from './types';

export const TaskCategoryCard = ({ title, img, backgroundColor }: TaskCategoryProps) => {
  const navigation = useNavigation();

  const timeFilter = useAppSelector(selectTimeFilter);
  const tasksLength = useAppSelector((state) => selectTasksLengthByCategory(state, title));

  const onTaskCategoryCardPress = () => {
    navigation.navigate('CategoryTasks', {
      category: title,
      timeFilter,
    });
  };

  return (
    <Pressable onPress={onTaskCategoryCardPress} style={[styles.taskCategory, { backgroundColor }]}>
      <Text
        variant={TextVariant.label_large}
        style={styles.taskAmountBadge}
        color={colors.onPrimary}
      >
        {tasksLength}
      </Text>
      <Image style={styles.taskCategoryImg} source={img} />
      <Text style={styles.taskText} variant={TextVariant.label_large} color={colors.onPrimary}>
        {title}
      </Text>
    </Pressable>
  );
};
