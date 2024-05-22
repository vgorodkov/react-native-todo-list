import React, { forwardRef } from 'react';
import { Image, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

import { Text } from '../Text';
import { TextVariant } from '../Text/types';
import { styles } from './styles';
import { InputProps } from './types';

export const Input = forwardRef<TextInput, InputProps>(
  ({ icon, label, errorMessage, ...props }, ref) => {
    return (
      <View style={{ gap: spacing.s }}>
        {label && (
          <Text variant={TextVariant.label_large} color={colors.primaryText}>
            {label}
          </Text>
        )}
        <View style={styles.inputContainer}>
          {icon && <Image source={icon} style={styles.icon} />}
          <TextInput style={styles.input} {...props} ref={ref} />
        </View>
        {errorMessage && (
          <Text variant={TextVariant.label_small} color="red">
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
);
