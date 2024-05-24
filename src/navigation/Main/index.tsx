import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackRoutes } from '@/constants/navigation';
import { DrawerNavigation } from '@/navigation/Drawer';
import { AddCategoryModal } from '@/screens/AddCategoryModal';
import { ByTitleTasksScreen } from '@/screens/ByTitleTasks';
import { CategoryTasksScreen } from '@/screens/CategoryTasks';
import { OnboardingScreen } from '@/screens/Onboarding';
import { TaskModal } from '@/screens/TaskModal';
import { RootStackParamList } from '@/types/navigation';

import { headerTitleByParams, stackModalScreensOptions, stackNavigatorOptions } from './options';

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <StackNavigator.Navigator screenOptions={stackNavigatorOptions}>
      <StackNavigator.Screen name={RootStackRoutes.ONBOARDING} component={OnboardingScreen} />
      <StackNavigator.Screen name={RootStackRoutes.DRAWER} component={DrawerNavigation} />
      <StackNavigator.Screen
        options={headerTitleByParams}
        name={RootStackRoutes.CATEGORY_TASKS}
        component={CategoryTasksScreen}
      />
      <StackNavigator.Screen
        options={headerTitleByParams}
        name={RootStackRoutes.BY_TITLE_TASKS}
        component={ByTitleTasksScreen}
      />
      <StackNavigator.Group screenOptions={stackModalScreensOptions}>
        <StackNavigator.Screen
          name={RootStackRoutes.ADD_CATEGORY_MODAL}
          component={AddCategoryModal}
        />
        <StackNavigator.Screen name={RootStackRoutes.TASK_MODAL} component={TaskModal} />
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
};
