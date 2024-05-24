import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { getHeaderTitleByTimeFilter } from '@/utils/getHeaderTitleByTimeFilter';

import { ScreensWithHeaderTitleProps } from './types';

export const stackNavigatorOptions = { headerShown: false };

export const stackModalScreensOptions: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'fade',
};

export const headerTitleByParams = ({
  route,
}: ScreensWithHeaderTitleProps): NativeStackNavigationOptions => ({
  headerTitleAlign: 'center',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: 'white',
  headerTitleStyle: { color: 'white' },
  title: getHeaderTitleByTimeFilter(route.params.timeFilter),
});
