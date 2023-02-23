import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigationStack from './src/routes/MainNavigation';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
};

export default App;
