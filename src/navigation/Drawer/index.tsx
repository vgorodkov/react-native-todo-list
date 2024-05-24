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

const DrawerNavigator = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={drawerNavigatorOptions}
      drawerContent={DrawerCustomContent}
    >
      <DrawerNavigator.Screen
        name={DrawerRoutes.MAIN}
        component={MainScreen}
        options={drawerMainScreenOptions}
      />
      <DrawerNavigator.Group screenOptions={drawerGroupScreenOptions}>
        <DrawerNavigator.Screen name={DrawerRoutes.DAILY_TASKS} component={DailyTasksScreen} />
        <DrawerNavigator.Screen
          name={DrawerRoutes.IMPORTANT_TASKS}
          component={ImportantTasksScreen}
        />
        <DrawerNavigator.Screen name={DrawerRoutes.DONE_TASKS} component={DoneTasksScreen} />
      </DrawerNavigator.Group>
    </DrawerNavigator.Navigator>
  );
};
