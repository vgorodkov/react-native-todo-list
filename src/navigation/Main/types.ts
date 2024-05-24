import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '@/types/navigation';

export interface ScreensWithHeaderTitleProps {
  route: RouteProp<RootStackParamList, 'ByTitleTasks' | 'CategoryTasks'>;
}
