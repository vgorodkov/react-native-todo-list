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
    gap: spacing.m,
    borderRadius: spacing.s,
    backgroundColor: 'white',
  },
});
