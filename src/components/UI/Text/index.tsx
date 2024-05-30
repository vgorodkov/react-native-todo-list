import React from 'react';
import { Text as RNText } from 'react-native';

import { colors } from '@/constants/colors';

import { textStyles } from './styles';
import { TextProps, TextVariant } from './types';

export const Text = ({
  children,
  variant = TextVariant.BODY_LARGE,
  style,
  color = colors.primaryText,
}: TextProps) => {
  const txtStyle = textStyles[variant];

  return <RNText style={[txtStyle, style, { color: color }]}>{children}</RNText>;
};
