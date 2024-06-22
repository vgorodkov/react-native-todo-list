import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  timeText: { flexDirection: 'row', gap: spacing.s },
});
