import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/Main';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
