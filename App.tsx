import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/Main';
import { StatusBar } from 'react-native';
import { colors } from '@/constants/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
