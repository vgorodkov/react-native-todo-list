import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  todoDescription: {
    flex: 1,
  },
  timeRange: {
    gap: spacing.xs,
  },
  taskMenuToggleBtn: { width: 24, height: 24 },
});
