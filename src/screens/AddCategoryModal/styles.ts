import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  modalBackdrop: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#00000060',
  },
  modalContent: {
    margin: spacing.xl,
    paddingTop: spacing.l,
    paddingBottom: spacing.s,
    paddingHorizontal: spacing.xl,
    gap: spacing.m,
    borderRadius: spacing.s,
    backgroundColor: 'white',
  },
  avaibleColorsContainer: { flexDirection: 'row', gap: spacing.m, justifyContent: 'center' },
  footerBtnContainer: { justifyContent: 'flex-end', flexDirection: 'row', gap: spacing.m },
});
