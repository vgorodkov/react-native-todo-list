import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { TodosRevalidator } from '@/components/TodosRevalidator';
import { colors } from '@/constants/colors';
import { customTheme } from '@/constants/theme';
import { MainNavigation } from '@/navigation/Main';
import { persistor, store } from '@/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <NavigationContainer theme={customTheme}>
            <StatusBar backgroundColor={colors.primary} />
            <TodosRevalidator>
              <MainNavigation />
            </TodosRevalidator>
          </NavigationContainer>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
