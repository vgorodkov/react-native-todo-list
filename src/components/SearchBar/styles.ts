import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: spacing.m,
    marginHorizontal: spacing.l,
    borderRadius: 12,
    gap: spacing.s,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});
