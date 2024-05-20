import { StyleSheet } from 'react-native';

import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  container: { gap: 16, justifyContent: 'space-between' },
  inputContainer: { flexDirection: 'row', gap: 16 },
  inputField: { flex: 1 },
  listContentContainerStyle: { gap: spacing.s, paddingHorizontal: 2 },
});
