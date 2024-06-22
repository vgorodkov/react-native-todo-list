import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: { paddingTop: spacing.xl * 1.5, flex: 1 },
  leftGradientContainer: { position: 'absolute', left: -48, top: -48 },
  rightGradientContainer: { position: 'absolute', right: -72, top: -64 },
});
