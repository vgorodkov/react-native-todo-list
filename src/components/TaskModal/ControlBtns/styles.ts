import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  controlBtns: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.m,
    paddingHorizontal: spacing.m,
  },
});
