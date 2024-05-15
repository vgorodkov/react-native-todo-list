import { spacing } from '@/constants/spacing';
import { StyleSheet } from 'react-native';

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
