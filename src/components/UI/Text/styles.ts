import { TextStyle } from 'react-native';

import { TextVariant } from './types';

export const textStyles: Record<TextVariant, TextStyle | TextStyle[]> = {
  [TextVariant.TITLE_MEDIUM]: {
    fontSize: 24,
    fontWeight: '600',
  },
  [TextVariant.TITLE_SMALL]: {
    fontSize: 20,
    fontWeight: '600',
  },
  [TextVariant.BODY_LARGE]: {
    fontSize: 16,
    fontWeight: '400',
  },
  [TextVariant.BODY_SMALL]: {
    fontSize: 12,
    fontWeight: '400',
  },
  [TextVariant.LABEL_LARGE]: {
    fontSize: 16,
    fontWeight: '600',
  },
  [TextVariant.LABEL_SMALL]: {
    fontSize: 12,
    fontWeight: '600',
  },
};
