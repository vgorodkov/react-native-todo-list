import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.m,
    alignItems: 'center',
  },

  deleteIcon: { width: 24, height: 24 },
});
