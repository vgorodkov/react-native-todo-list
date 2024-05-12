import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/Main';
import { Platform, StatusBar } from 'react-native';
import { colors } from '@/constants/colors';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
