import { spacing } from '@/constants/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addTaskCategory: {
    height: 104,
    width: 104,
    margin: spacing.s,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D25EB0',
  },
  addTaskCategoryImg: {
    width: 60,
    height: 60,
  },
});
