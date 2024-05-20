import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/UI';
import { TextVariant } from '@/components/UI/Text/types';
import { colors } from '@/constants/colors';
import { useAppSelector } from '@/store/hooks';
import { selectTasksByTimeFilter } from '@/store/slices/taskSlice/selectors';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';
import { formatTimeFilterTitle } from '@/utils/formatTimeFilterTilte';

import { FIRST_PART_INFO, SECOND_PART_INFO, TODAY_DATE } from './constants';
import { styles } from './styles';

export const TaskTodayInfo = () => {
  const tasksLengthByTimeFilter = useAppSelector(selectTasksByTimeFilter).length;
  const timeFilter = useAppSelector(selectTimeFilter);

  return (
    <View style={styles.container}>
      <Text variant={TextVariant.title_small} color={colors.primaryText}>
        {FIRST_PART_INFO}
        <Text variant={TextVariant.title_medium} color={colors.onPrimary}>
          {tasksLengthByTimeFilter} {SECOND_PART_INFO}
        </Text>
        {formatTimeFilterTitle(timeFilter)}
      </Text>
      <Text variant={TextVariant.label_small} color={colors.primaryText}>
        {TODAY_DATE}
      </Text>
    </View>
  );
};
