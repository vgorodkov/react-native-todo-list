import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { RootStackRoutes } from '@/constants/navigation';
import { useAppSelector } from '@/store/hooks';
import { selectTasksLengthByCategory } from '@/store/slices/taskSlice/selectors';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';

import { styles } from './styles';
import { TaskCategoryProps } from './types';

export const TaskCategoryCard = ({ title, img, backgroundColor }: TaskCategoryProps) => {
  const navigation = useNavigation();

  const timeFilter = useAppSelector(selectTimeFilter);
  const tasksLength = useAppSelector(selectTasksLengthByCategory(title));

  const onTaskCategoryCardPress = () => {
    navigation.navigate(RootStackRoutes.CATEGORY_TASKS, {
      category: title,
      timeFilter,
    });
  };

  return (
    <Pressable
      testID={`Main.TaskCategory${title}`}
      onPress={onTaskCategoryCardPress}
      style={[styles.taskCategory, { backgroundColor }]}
    >
      <Text
        variant={TextVariant.LABEL_LARGE}
        style={styles.taskAmountBadge}
        color={colors.onPrimary}
      >
        {tasksLength}
      </Text>
      <Image style={styles.taskCategoryImg} source={img} />
      <Text style={styles.taskText} variant={TextVariant.LABEL_LARGE} color={colors.onPrimary}>
        {title}
      </Text>
    </Pressable>
  );
};
