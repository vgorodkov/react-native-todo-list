import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  timeFilter: {
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 14,
  },
  activeTimeFilter: {
    backgroundColor: colors.primary,
  },
});
