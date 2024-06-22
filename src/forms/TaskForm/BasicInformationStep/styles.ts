import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.m,
  },
  errorText: {
    color: colors.errorText,
  },
  inputContainer: {
    height: 64,
  },
});
