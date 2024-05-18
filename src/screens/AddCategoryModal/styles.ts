import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  avaibleColorsContainer: { flexDirection: 'row', gap: spacing.m, justifyContent: 'center' },
  footerBtnContainer: { justifyContent: 'flex-end', flexDirection: 'row', gap: spacing.m },
});
