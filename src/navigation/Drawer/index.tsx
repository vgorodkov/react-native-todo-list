import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerRoutes } from '@/constants/navigation';
import { DailyTasksScreen } from '@/screens/DailyTasks';
import { DoneTasksScreen } from '@/screens/DoneTasks';
import { ImportantTasksScreen } from '@/screens/ImportantTasks';
import { MainScreen } from '@/screens/Main';
import { DrawerParamList } from '@/types/navigation';

import { DrawerCustomContent } from './DrawerCustomContent';
import {
  drawerGroupScreenOptions,
  drawerMainScreenOptions,
  drawerNavigatorOptions,
} from './options';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={drawerNavigatorOptions} drawerContent={DrawerCustomContent}>
      <Drawer.Screen
        name={DrawerRoutes.MAIN}
        component={MainScreen}
        options={drawerMainScreenOptions}
      />
      <Drawer.Group screenOptions={drawerGroupScreenOptions}>
        <Drawer.Screen name={DrawerRoutes.DAILY_TASKS} component={DailyTasksScreen} />
        <Drawer.Screen name={DrawerRoutes.IMPORTANT_TASKS} component={ImportantTasksScreen} />
        <Drawer.Screen name={DrawerRoutes.DONE_TASKS} component={DoneTasksScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
