import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.m,
    gap: spacing.m,
    flex: 1,
    marginTop: spacing.xl * 2,
  },
  rightEllipsisContainer: { left: -48, top: -48 },
  leftEllipsisContainer: { right: -48, top: -48 },
});
