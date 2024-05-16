import { View } from 'react-native';

import { timeFilters } from './constants';
import { styles } from './styles';
import { TimeFilter } from './TimeFilter';

export const TimeFiltersRow = () => {
  return (
    <View style={styles.timeFiltersContainer}>
      {timeFilters.map((timeFilter) => (
        <TimeFilter key={timeFilter} title={timeFilter} />
      ))}
    </View>
  );
};
