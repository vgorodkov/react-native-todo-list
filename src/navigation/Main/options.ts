import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { MainStackParamList } from '@/types/navigation';
import { getHeaderTitleByTimeFilter } from '@/utils/getHeaderTitleByTimeFilter';

export type Props = {
  route: RouteProp<MainStackParamList, keyof MainStackParamList>;
};

export const stackNavigatorOptions = { headerShown: false };

export const stackModalScreensOptions: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'fade',
};

export const headerTitleByParams = ({ route }: Props): NativeStackNavigationOptions => ({
  headerTitleAlign: 'center',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: 'white',
  headerTitleStyle: { color: 'white' },
  title: getHeaderTitleByTimeFilter(route.params?.timeFilter),
});
