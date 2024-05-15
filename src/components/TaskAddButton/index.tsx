import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export const TaskAddButton = () => {
  return (
    <View style={styles.taskAddBtnIconContainer}>
      <Image style={styles.taskAddBtnIcon} source={require('@/assets/icons/todo_plus.png')} />
    </View>
  );
};
