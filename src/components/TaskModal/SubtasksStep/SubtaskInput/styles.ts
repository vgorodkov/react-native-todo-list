import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: spacing.m,
  },
  addIcon: { alignSelf: 'flex-start' },
});
