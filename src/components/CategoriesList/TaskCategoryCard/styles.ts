import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  taskCategory: {
    height: 104,
    width: 104,
    margin: spacing.s,
    borderRadius: 16,
    ...commonStyles.centeredView,
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
  taskText: {
    textAlign: 'center',
    maxWidth: '90%',
  },
});
