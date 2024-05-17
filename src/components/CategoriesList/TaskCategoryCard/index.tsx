import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppSelector } from '@/store/hooks';
import { selectTodosLengthByCategory } from '@/store/slices/todosSlice/selectors';

import { styles } from './styles';
import { TaskCategoryProps } from './types';

export const TaskCategoryCard = ({ title, img, backgroundColor }: TaskCategoryProps) => {
  const navigation = useNavigation();
  const todosLength = useAppSelector((state) => selectTodosLengthByCategory(state, title));

  const onTaskCategoryCardPress = () => {
    navigation.navigate('CategoryTodos', {
      category: title,
    });
  };

  return (
    <Pressable onPress={onTaskCategoryCardPress} style={[styles.taskCategory, { backgroundColor }]}>
      <Text
        variant={TextVariant.label_large}
        style={styles.taskAmountBadge}
        color={colors.onPrimary}
      >
        {todosLength}
      </Text>
      <Image style={styles.taskCategoryImg} source={img} />
      <Text style={styles.taskText} variant={TextVariant.label_large} color="white">
        {title}
      </Text>
    </Pressable>
  );
};
