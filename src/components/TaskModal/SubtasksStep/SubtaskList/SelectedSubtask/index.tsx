import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { useAppDispatch } from '@/store/hooks';
import { deleteSubtask } from '@/store/slices/taskModalSlice';

import { styles } from './styles';
import { SelectedSubtaskProps } from './types';

export const SelectedSubtask = ({ title, index, id }: SelectedSubtaskProps) => {
  const dispatch = useAppDispatch();

  const onDeleteBtnPress = () => {
    dispatch(deleteSubtask(id));
  };

  return (
    <View style={styles.container}>
      <Text variant={TextVariant.body_large} style={commonStyles.fullSize}>
        {index + 1}. {title}
      </Text>
      <Pressable onPress={onDeleteBtnPress}>
        <Image source={require('@/assets/icons/delete.png')} style={styles.deleteIcon} />
      </Pressable>
    </View>
  );
};
