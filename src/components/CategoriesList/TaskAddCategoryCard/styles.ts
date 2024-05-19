import { StyleSheet } from 'react-native';

import { commonStyles } from '@/commonStyles';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';

export const styles = StyleSheet.create({
  addTaskCategory: {
    height: 104,
    width: 104,
    margin: spacing.s,
    borderRadius: 16,
    ...commonStyles.centeredView,
    borderWidth: 1,
    borderColor: colors.categoryBorder,
  },
  addTaskCategoryImg: {
    width: 60,
    height: 60,
  },
});
