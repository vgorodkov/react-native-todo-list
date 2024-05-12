import { Image, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Text } from '@/components/Text';
import { TextVariant } from '@/components/Text/types';
import { TaskCategoryProps } from './types';
import { colors } from '@/constants/colors';

export const TaskCategoryCard = ({ title, img, backgroundColor }: TaskCategoryProps) => {
  return (
    <View style={[styles.taskCategory, { backgroundColor }]}>
      <Text
        variant={TextVariant.label_large}
        style={styles.taskAmountBadge}
        color={colors.onPrimary}
      >
        {1}
      </Text>
      <Image style={styles.taskCategoryImg} source={img} />
      <Text variant={TextVariant.label_large} color={'white'}>
        {title}
      </Text>
    </View>
  );
};
