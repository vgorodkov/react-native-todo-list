import { View } from 'react-native';
import React from 'react';
import { Text } from '@/components/Text';
import { TextVariant } from '@/components/Text/types';
import { colors } from '@/constants/colors';
import { styles } from './styles';

export const TaskTodayInfo = () => {
  return (
    <View style={styles.container}>
      <Text variant={TextVariant.title_small} color={colors.primaryText}>
        you have{' '}
        <Text variant={TextVariant.title_medium} color={colors.primary}>
          5 tasks
        </Text>{' '}
        today!
      </Text>
      <Text variant={TextVariant.label_small} color={colors.primaryText}>
        {new Date(Date.now()).toDateString()}
      </Text>
    </View>
  );
};