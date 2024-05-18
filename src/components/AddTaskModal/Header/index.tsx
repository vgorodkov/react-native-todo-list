import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTaskModalIsImportant } from '@/store/slices/taskModalSlice';

import { styles } from './styles';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isImportant = useAppSelector((state) => state.taskModal.isImportant);

  const onIsImportantIconPress = () => {
    dispatch(toggleTaskModalIsImportant());
  };

  return (
    <View style={styles.container}>
      <View style={styles.empty} />
      <Text variant={TextVariant.label_large}>Create new Todo</Text>
      <Pressable onPress={onIsImportantIconPress}>
        <Image
          source={
            isImportant
              ? require('@/assets/icons/important_active.png')
              : require('@/assets/icons/important_inactive.png')
          }
          style={styles.isImportantIcon}
        />
      </Pressable>
    </View>
  );
};
