import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { useAppDispatch } from '@/store/hooks';
import { deleteSubtask } from '@/store/slices/taskModalSlice';

import { styles } from './styles';
import { SelectedSubtaskProps } from './types';

export const SelectedSubtask = ({ title, index, id }: SelectedSubtaskProps) => {
  const dispatch = useAppDispatch();

  const handleSubtaskDelete = () => {
    dispatch(deleteSubtask(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtaskText}>
        {index + 1}. {title}
      </Text>
      <Pressable onPress={handleSubtaskDelete}>
        <Image source={require('@/assets/icons/delete.png')} style={styles.deleteIcon} />
      </Pressable>
    </View>
  );
};
