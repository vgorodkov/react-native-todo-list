import { DrawerNavigationOptions, DrawerScreenProps } from '@react-navigation/drawer';

import { spacing } from '@/constants/spacing';
import { DrawerHeaderRight } from '@/navigation/Drawer/DrawerHeaderRight';
import { MainStackParamList } from '@/types/navigation';

import { renderDrawerIcon } from './utils';

export const drawerNavigatorOptions: DrawerNavigationOptions = {
  headerTransparent: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { color: 'white' },
};

export const drawerMainScreenOptions: DrawerNavigationOptions = {
  headerRight: DrawerHeaderRight,
  headerRightContainerStyle: { paddingRight: spacing.m },
  drawerItemStyle: { display: 'none' },

  title: '',
};

export const drawerGroupScreenOptions = ({ route }: DrawerScreenProps<MainStackParamList>) => ({
  drawerIcon: () => renderDrawerIcon(route.name),
});
