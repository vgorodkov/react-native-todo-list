import { View } from 'react-native';

import { useAppSelector } from '@/store/hooks';
import { selectTimeFilter } from '@/store/slices/timeFilterSlice/selectors';

import { timeFilters } from './constants';
import { styles } from './styles';
import { TimeFilter } from './TimeFilter';

export const TimeFiltersRow = () => {
  const selectedTimefilter = useAppSelector(selectTimeFilter);
  return (
    <View style={styles.timeFiltersContainer}>
      {timeFilters.map((timeFilter) => (
        <TimeFilter
          isSelected={selectedTimefilter === timeFilter}
          key={timeFilter}
          title={timeFilter}
        />
      ))}
    </View>
  );
};
