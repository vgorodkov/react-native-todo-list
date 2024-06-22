import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
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
    resizeMode: 'contain',
  },
  appInfo: {
    ...commonStyles.centeredView,
    gap: spacing.s,
  },
  appDescription: {
    textAlign: 'center',
    maxWidth: '90%',
  },
});
