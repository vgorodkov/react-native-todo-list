import React from 'react';
import { Image, Pressable } from 'react-native';

import { styles } from './styles';

interface AddIconProps {
  onAddIconPress: () => void;
  size?: number;
}

export const AddIcon = ({ onAddIconPress, size = 32 }: AddIconProps) => {
  return (
    <Pressable onPress={onAddIconPress} style={styles.taskAddBtnIconContainer}>
      <Image
        style={{ width: size, height: size }}
        source={require('@/assets/icons/todo_plus.png')}
      />
    </Pressable>
  );
};
