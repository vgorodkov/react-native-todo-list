import { MainScreen } from '@/screens/Main';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  drawerGroupScreenOptions,
  drawerMainScreenOptions,
  drawerNavigatorOptions,
} from './options';
import { DrawerCustomContent } from './DrawerCustomContent';
import { TodosScreen } from '@/screens/Todos';

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
