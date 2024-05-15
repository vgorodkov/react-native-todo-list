import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: spacing.sm,
    paddingVertical: spacing.sm,
  },
  pressedBtn: {
    opacity: 0.7,
  },
});
