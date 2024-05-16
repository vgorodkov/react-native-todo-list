import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  solidBtn: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: spacing.sm,
  },
  textBtn: {},

  pressedBtn: {
    opacity: 0.7,
  },
  disabledBtn: {
    backgroundColor: '#A5A5A5',
  },
});
