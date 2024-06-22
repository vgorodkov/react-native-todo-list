import { RouteProp } from '@react-navigation/native';

import { RootStackRoutes } from '@/constants/navigation';
import { RootStackParamList } from '@/types/navigation';

export interface ScreensWithHeaderTitleProps {
  route: RouteProp<
    RootStackParamList,
    RootStackRoutes.BY_TITLE_TASKS | RootStackRoutes.CATEGORY_TASKS
  >;
}
