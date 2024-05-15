import { Image, TextInput, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Text } from '../Text';
import { spacing } from '@/constants/spacing';
import { TextVariant } from '../Text/types';
import { colors } from '@/constants/colors';
import { InputProps } from './types';

export const Input = ({ icon, label, ...props }: InputProps) => {
  return (
    <View style={{ gap: spacing.s }}>
      {label && (
        <Text variant={TextVariant.label_large} color={colors.primaryText}>
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};
