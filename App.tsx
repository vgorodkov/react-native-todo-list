import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/Main';
import { StatusBar } from 'react-native';
import { colors } from '@/constants/colors';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={customTheme}>
      <StatusBar backgroundColor={colors.primary} />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
