import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.m,
    paddingTop: spacing.m,
  },
  empty: { width: 24 },
  isImportantIcon: { width: 24, height: 24 },
});
