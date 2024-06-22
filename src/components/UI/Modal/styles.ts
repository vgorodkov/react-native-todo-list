import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  modalContent: {
    gap: spacing.m,
    borderRadius: spacing.s,
    backgroundColor: 'white',
  },
  modalBackdrop: { backgroundColor: '#00000060' },
});
