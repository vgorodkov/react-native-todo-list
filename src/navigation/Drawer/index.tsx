import { MainScreen } from '@/screens/Main';
import { TodoListScreen } from '@/screens/TodoList';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Group>
        <Drawer.Screen name="Daily tasks" component={TodoListScreen} />
        <Drawer.Screen name="Important tasks" component={TodoListScreen} />
        <Drawer.Screen name="Done tasks" component={TodoListScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};
