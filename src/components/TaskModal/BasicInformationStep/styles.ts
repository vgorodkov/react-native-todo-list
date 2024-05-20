import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.m,
  },
  errorText: {
    color: 'red',
  },
  inputContainer: {
    height: 64,
  },
});
