import { spacing } from '@/constants/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    padding: spacing.m,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
    gap: spacing.sm,
  },
});
