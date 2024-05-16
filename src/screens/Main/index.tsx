import { View } from 'react-native';

import { CategoriesList } from '@/components/CategoriesList';
import { TaskTodayInfo } from '@/components/TaskTodayInfo';
import { TimeFiltersRow } from '@/components/TimeFiltersRow';
import { Input } from '@/components/UI';

import { styles } from './styles';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TaskTodayInfo />
      <Input placeholder="Search tasks" icon={require('@/assets/icons/search.png')} />
      <TimeFiltersRow />
      <CategoriesList />
    </View>
  );
};
