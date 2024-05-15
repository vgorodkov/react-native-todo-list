import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.l,
  },
  welcomeImg: {
    height: 400,
  },
  appInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.s,
  },
  appDescription: {
    textAlign: 'center',
    maxWidth: '90%',
  },
});
