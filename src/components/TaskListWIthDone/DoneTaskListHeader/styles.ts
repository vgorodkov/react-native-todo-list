import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  doneTaskListHeader: {
    paddingTop: spacing.s,
    height: 40,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.m,
  },
  arrowDownIcon: { width: 24, height: 24 },
});
