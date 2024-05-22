import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  modalContainer: { margin: spacing.xl, padding: spacing.l, paddingBottom: spacing.s },
  avaibleColorsContainer: { flexDirection: 'row', gap: spacing.m, justifyContent: 'center' },
  footerBtnContainer: { justifyContent: 'flex-end', flexDirection: 'row', gap: spacing.m },
});
