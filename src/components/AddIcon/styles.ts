import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  taskAddBtnIconContainer: {
    backgroundColor: colors.primary,
    padding: spacing.s,
    borderRadius: 100,
    alignSelf: 'center',
  },
});
