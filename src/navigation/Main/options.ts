import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { MainStackParamList } from '@/types/navigation';
import { getHeaderTitleByTimeFilter } from '@/utils/getHeaderTitleByTimeFilter';

export type Props = NativeStackScreenProps<MainStackParamList, 'ByTitleTasks' | 'CategoryTasks'>;

export const StackNavigatorOptions = { headerShown: false };

export const StackModalScreensOptions: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'fade',
};

export const HeaderTitleByParams: NativeStackNavigationOptions = ({ route }: Props) => ({
  headerTitleAlign: 'center',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: 'white',
  headerTitleStyle: { color: 'white' },
  title: getHeaderTitleByTimeFilter(route.params?.timeFilter),
});
