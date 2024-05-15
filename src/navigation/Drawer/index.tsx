import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainScreen } from '@/screens/Main';
import { TodosScreen } from '@/screens/Todos';

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
        <Drawer.Screen name="DailyTasks" component={TodosScreen} />
        <Drawer.Screen name="ImportantTasks" component={TodosScreen} />
        <Drawer.Screen name="DoneTasks" component={TodosScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
