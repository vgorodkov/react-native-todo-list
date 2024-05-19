import React from 'react';
import { Image, Pressable } from 'react-native';

import { DEFAULT_SIZE } from './constants';
import { styles } from './styles';
import { AddIconProps } from './types';

export const AddIcon = ({ onAddIconPress, size = DEFAULT_SIZE }: AddIconProps) => {
  return (
    <Pressable onPress={onAddIconPress} style={styles.taskAddBtnIconContainer}>
      <Image
        style={{ width: size, height: size }}
        source={require('@/assets/icons/todo_plus.png')}
      />
    </Pressable>
  );
};
