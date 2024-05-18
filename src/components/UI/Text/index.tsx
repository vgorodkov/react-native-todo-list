import React from 'react';
import { Text as RNText } from 'react-native';

import { colors } from '@/constants/colors';

import { textStyles } from './styles';
import { TextProps } from './types';

export const Text = ({ children, variant, style, color }: TextProps) => {
  const txtStyle = textStyles[variant ?? 'body_large'];

  return (
    <RNText style={[txtStyle, style, { color: color ?? colors.primaryText }]}>{children}</RNText>
  );
};
