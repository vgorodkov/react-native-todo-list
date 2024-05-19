import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  doneTaskListHeader: {
    backgroundColor: colors.onPrimary,
    paddingTop: spacing.s,
    height: 40,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.m,
  },
  arrowDownIcon: { width: 24, height: 24 },
});
