import { OnboardingScreen } from '@/screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigation } from './Drawer';
import { MainStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};
