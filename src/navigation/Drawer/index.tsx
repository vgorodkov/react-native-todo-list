import { createDrawerNavigator } from '@react-navigation/drawer';

import { DailyTodosScreen } from '@/screens/DailyTodos';
import { DoneTodosScreen } from '@/screens/DoneTodos';
import { ImportantTodosScreen } from '@/screens/ImportantTodos';
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
        <Drawer.Screen name="DailyTasks" component={DailyTodosScreen} />
        <Drawer.Screen name="ImportantTasks" component={ImportantTodosScreen} />
        <Drawer.Screen name="DoneTasks" component={DoneTodosScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
