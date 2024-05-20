import { View } from 'react-native';

import { CategoriesList } from '@/components/CategoriesList';
import { TaskSearchbar } from '@/components/TaskSearchbar';
import { TaskTodayInfo } from '@/components/TaskTodayInfo';
import { TimeFiltersRow } from '@/components/TimeFiltersRow';

import { styles } from './styles';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TaskTodayInfo />
      <TaskSearchbar />
      <TimeFiltersRow />
      <CategoriesList />
    </View>
  );
};
