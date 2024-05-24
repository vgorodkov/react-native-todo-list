import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppSelector } from '@/store/hooks';
import { selectTasksLengthByTimeFilter } from '@/store/slices/taskSlice/selectors';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';
import { formatTimeFilterTitle } from '@/utils/formatTimeFilterTilte';

import { TODAY_DATE } from './constants';
import { styles } from './styles';

export const TaskTodayInfo = () => {
  const tasksLengthByTimeFilter = useAppSelector(selectTasksLengthByTimeFilter);
  const timeFilter = useAppSelector(selectTimeFilter);

  return (
    <View style={styles.container}>
      <Text variant={TextVariant.title_small} color={colors.primaryText}>
        you have
        <Text variant={TextVariant.title_medium} color={colors.onPrimary}>
          {tasksLengthByTimeFilter} tasks
        </Text>
        {formatTimeFilterTitle(timeFilter)}
      </Text>
      <Text variant={TextVariant.label_small} color={colors.primaryText}>
        {TODAY_DATE}
      </Text>
    </View>
  );
};
