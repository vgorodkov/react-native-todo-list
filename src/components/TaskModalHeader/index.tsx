import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsImportant } from '@/store/slices/taskModalSlice';
import { selectTaskModalIsImportant } from '@/store/slices/taskModalSlice/selectors';

import { styles } from './styles';

export const TaskModalHeader = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

  const isTaskImportant = useAppSelector(selectTaskModalIsImportant);

  const toggleTaskImportant = () => {
    dispatch(toggleIsImportant());
  };

  return (
    <View style={styles.container}>
      <View style={styles.empty} />
      <Text variant={TextVariant.LABEL_LARGE}>{title}</Text>
      <Pressable onPress={toggleTaskImportant}>
        <Image
          source={
            isTaskImportant
              ? require('@/assets/icons/important_active.png')
              : require('@/assets/icons/important_inactive.png')
          }
          style={styles.isImportantIcon}
        />
      </Pressable>
    </View>
  );
};
