import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  taskContainer: {
    padding: spacing.m,
    borderRadius: 16,
    backgroundColor: 'white',
    gap: spacing.sm,
    ...commonStyles.shadow,
  },
  subtaskContainer: {
    gap: 16,
  },
});
