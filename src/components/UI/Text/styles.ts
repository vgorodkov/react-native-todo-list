import { TextStyle } from 'react-native';

import { TextVariant } from './types';

export const textStyles: Record<TextVariant, TextStyle | TextStyle[]> = {
  [TextVariant.title_medium]: {
    fontSize: 24,
    fontWeight: '600',
  },
  [TextVariant.title_small]: {
    fontSize: 20,
    fontWeight: '600',
  },
  [TextVariant.body_large]: {
    fontSize: 16,
    fontWeight: '400',
  },
  [TextVariant.body_small]: {
    fontSize: 12,
    fontWeight: '400',
  },
  [TextVariant.label_large]: {
    fontSize: 16,
    fontWeight: '600',
  },
  [TextVariant.label_small]: {
    fontSize: 12,
    fontWeight: '600',
  },
};
