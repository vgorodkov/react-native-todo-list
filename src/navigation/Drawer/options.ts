import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { DrawerHeaderRight } from '@/navigation/Drawer/DrawerHeaderRight';

import { renderDrawerIcon } from './utils';

export const drawerNavigatorOptions: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: { color: colors.onPrimary },
  headerTitleAlign: 'center',
};

export const drawerMainScreenOptions: DrawerNavigationOptions = {
  headerRight: DrawerHeaderRight,
  headerRightContainerStyle: { paddingRight: spacing.m },
  drawerItemStyle: { display: 'none' },
  title: '',
};

//TODO: remove any

export const drawerGroupScreenOptions = ({ route }: any) => ({
  drawerIcon: () => renderDrawerIcon(route.name),
});
