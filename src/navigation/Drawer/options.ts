import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { spacing } from '@/constants/spacing';
import { DrawerHeaderRight } from '@/navigation/Drawer/DrawerHeaderRight';

import { HeaderLeft } from './DrawerHeaderLeft';
import { DrawerGroupScreenOptionsProps } from './types';
import { renderDrawerIcon } from './utils';

export const drawerNavigatorOptions: DrawerNavigationOptions = {
  headerTransparent: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { color: 'white' },
  headerLeft: HeaderLeft,
};

export const drawerMainScreenOptions: DrawerNavigationOptions = {
  headerRight: DrawerHeaderRight,

  headerRightContainerStyle: { paddingRight: spacing.m },
  drawerItemStyle: { display: 'none' },
  title: '',
};

export const drawerGroupScreenOptions = ({
  route,
}: DrawerGroupScreenOptionsProps): DrawerNavigationOptions => ({
  drawerIcon: () => renderDrawerIcon(route.name),
});
