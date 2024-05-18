import { createDrawerNavigator } from '@react-navigation/drawer';

import { DailyTasksScreen } from '@/screens/DailyTasks';
import { DoneTasksScreen } from '@/screens/DoneTasks';
import { ImportantTasksScreen } from '@/screens/ImportantTasks';
import { MainScreen } from '@/screens/Main';

import { DrawerCustomContent } from './DrawerCustomContent';
import {
  drawerGroupScreenOptions,
  drawerMainScreenOptions,
  drawerNavigatorOptions,
} from './options';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={drawerNavigatorOptions} drawerContent={DrawerCustomContent}>
      <Drawer.Screen name="Main" component={MainScreen} options={drawerMainScreenOptions} />
      <Drawer.Group screenOptions={drawerGroupScreenOptions}>
        <Drawer.Screen name="DailyTasks" component={DailyTasksScreen} />
        <Drawer.Screen name="ImportantTasks" component={ImportantTasksScreen} />
        <Drawer.Screen name="DoneTasks" component={DoneTasksScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
