import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import { TodosPersistor } from '@/components/TodosPersistor';
import { colors } from '@/constants/colors';
import { MainNavigation } from '@/navigation/Main';
import { store } from '@/store';

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
    <Provider store={store}>
      <NavigationContainer theme={customTheme}>
        <StatusBar backgroundColor={colors.primary} />
        <TodosPersistor>
          <MainNavigation />
        </TodosPersistor>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
