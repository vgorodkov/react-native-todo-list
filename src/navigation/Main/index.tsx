import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Group screenOptions={headerTitleByParams}>
        <Stack.Screen name="CategoryTasks" component={CategoryTasksScreen} />
        <Stack.Screen name="ByTitleTasks" component={ByTitleTasksScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={stackModalScreensOptions}>
        <Stack.Screen name="AddCategoryModal" component={AddCategoryModal} />
        <Stack.Screen name="TaskModal" component={TaskModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
