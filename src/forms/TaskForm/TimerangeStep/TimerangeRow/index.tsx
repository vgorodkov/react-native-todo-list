import React from 'react';
import { View } from 'react-native';

import { Button, Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';

import { styles } from './styles';
import { TimerangeRowProps } from './types';

export const TimerangeRow = ({ label, time, onPress, errorText }: TimerangeRowProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.timeText}>
          <Text>{label}</Text>
          <Text variant={TextVariant.LABEL_LARGE}>{time}</Text>
        </View>
        <Button
          testID={`TaskModal.TimerangeStep.Change${label}Time`}
          variant="text"
          onPress={onPress}
        >
          Change
        </Button>
      </View>
      {errorText && (
        <Text color="red" variant={TextVariant.LABEL_SMALL}>
          {errorText}
        </Text>
      )}
    </>
  );
};
