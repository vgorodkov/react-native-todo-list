import { View, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

export const TaskAddButton = () => {
  return (
    <View style={styles.taskAddBtnIconContainer}>
      <Image style={styles.taskAddBtnIcon} source={require('@/assets/icons/todo_plus.png')} />
    </View>
  );
};
