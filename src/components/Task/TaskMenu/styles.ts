import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  taskMenu: {
    position: 'absolute',
    padding: spacing.s,
    gap: spacing.s,
    top: -spacing.l,
    right: spacing.l,
    backgroundColor: 'white',
    ...commonStyles.shadow,
  },
});
