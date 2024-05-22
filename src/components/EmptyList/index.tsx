import React from 'react';
import { View } from 'react-native';

import { commonStyles } from '@/commonStyles';

import { Text } from '../UI';
import { TextVariant } from '../UI/Text/types';

export const EmptyList = ({ message }: { message: string }) => {
  return (
    <View style={commonStyles.fullSizeCentered}>
      <Text variant={TextVariant.label_large}>{message}</Text>
    </View>
  );
};
