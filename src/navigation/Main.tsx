import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingScreen } from '@/screens/Onboarding';
import { MainStackParamList } from '@/types/navigation';

import { DrawerNavigation } from './Drawer';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
