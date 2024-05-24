import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackRoutes } from '@/constants/navigation';
import { DrawerNavigation } from '@/navigation/Drawer';
import { AddCategoryModal } from '@/screens/AddCategoryModal';
import { ByTitleTasksScreen } from '@/screens/ByTitleTasks';
import { CategoryTasksScreen } from '@/screens/CategoryTasks';
import { OnboardingScreen } from '@/screens/Onboarding';
import { TaskModal } from '@/screens/TaskModal';
import { MainStackParamList } from '@/types/navigation';

import { headerTitleByParams, stackModalScreensOptions, stackNavigatorOptions } from './options';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={RootStackRoutes.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={RootStackRoutes.DRAWER} component={DrawerNavigation} />
      <Stack.Group screenOptions={headerTitleByParams}>
        <Stack.Screen name={RootStackRoutes.CATEGORY_TASKS} component={CategoryTasksScreen} />
        <Stack.Screen name={RootStackRoutes.BY_TITLE_TASKS} component={ByTitleTasksScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={stackModalScreensOptions}>
        <Stack.Screen name={RootStackRoutes.ADD_CATEGORY_MODAL} component={AddCategoryModal} />
        <Stack.Screen name={RootStackRoutes.TASK_MODAL} component={TaskModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
