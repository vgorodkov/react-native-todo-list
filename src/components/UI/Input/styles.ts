import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    gap: spacing.s,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: spacing.m,
    borderRadius: 4,
    gap: spacing.s,
    backgroundColor: 'white',
    ...commonStyles.shadow,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
