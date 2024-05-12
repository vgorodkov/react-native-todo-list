import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  taskCategory: {
    height: 104,
    width: 104,
    margin: spacing.s,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.s,
  },
  taskAmountBadge: {
    position: 'absolute',
    top: spacing.s,
    right: spacing.s,
  },
  taskCategoryImg: {
    width: 32,
    height: 32,
  },
});
