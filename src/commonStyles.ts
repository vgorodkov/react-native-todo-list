import { StyleSheet } from 'react-native';

import { colors } from './constants/colors';
import { spacing } from './constants/spacing';

export const commonStyles = StyleSheet.create({
  fullSize: {
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSizeCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  addIcon: {
    backgroundColor: colors.primary,
    padding: spacing.s,
    borderRadius: 100,
  },
});
