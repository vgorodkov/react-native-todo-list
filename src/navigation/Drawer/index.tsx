import { MainScreen } from '@/screens/Main';
import { TodoListScreen } from '@/screens/TodoList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  drawerGroupScreenOptions,
  drawerMainScreenOptions,
  drawerNavigatorOptions,
} from './options';
import { DrawerCustomContent } from './DrawerCustomContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={drawerNavigatorOptions} drawerContent={DrawerCustomContent}>
      <Drawer.Screen name="Main" component={MainScreen} options={drawerMainScreenOptions} />
      <Drawer.Group screenOptions={drawerGroupScreenOptions}>
        <Drawer.Screen name="DailyTasks" component={TodoListScreen} />
        <Drawer.Screen name="ImportantTasks" component={TodoListScreen} />
        <Drawer.Screen name="DoneTasks" component={TodoListScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
