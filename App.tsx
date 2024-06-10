import 'react-native-gesture-handler';
import React from 'react';
import { FormScreen } from './src/screens/address/FormScreen';
import { MapScreen } from './src/screens/map/MapScreen';
import { MainAppStack } from './src/navigator/MainAppStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}

export default App;
