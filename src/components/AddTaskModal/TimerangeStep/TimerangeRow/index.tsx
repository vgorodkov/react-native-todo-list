import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';

import { styles } from './styles';
import { TimerangeRowProps } from './types';

export const TimerangeRow = ({ label, time, onPress }: TimerangeRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeText}>
        <Text>{label}</Text>
        <Text variant={TextVariant.label_large}>{time}</Text>
      </View>
      <Button variant="text" onPress={onPress}>
        Change
      </Button>
    </View>
  );
};
