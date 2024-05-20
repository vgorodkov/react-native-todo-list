import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';

import { styles } from './styles';

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text variant={TextVariant.label_large} color={colors.primaryText}>
        No tasks yet
      </Text>
    </View>
  );
};
