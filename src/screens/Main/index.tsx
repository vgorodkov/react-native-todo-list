import { View } from 'react-native';

import { CategoriesList } from '@/components/CategoriesList';
import { GradientEllipsesBg } from '@/components/GradientEllipsesBg';
import { TaskSearchbar } from '@/components/TaskSearchbar';
import { TaskTodayInfo } from '@/components/TaskTodayInfo';
import { TimeFiltersRow } from '@/components/TimeFiltersRow';

import {
  leftEllipsisSize,
  leftGradientStops,
  rightEllipsisSize,
  rightGradientStops,
} from './constants';
import { styles } from './styles';

export const MainScreen = () => {
  return (
    <>
      <GradientEllipsesBg
        rightEllipsisStyle={styles.leftEllipsisContainer}
        leftEllipsisStyle={styles.rightEllipsisContainer}
        leftEllipsisSize={leftEllipsisSize}
        leftGradientStops={leftGradientStops}
        rightEllipsisSize={rightEllipsisSize}
        rightGradientStops={rightGradientStops}
      />
      <View style={styles.container}>
        <TaskTodayInfo />
        <TaskSearchbar />
        <TimeFiltersRow />
        <CategoriesList />
      </View>
    </>
  );
};
