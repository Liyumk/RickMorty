import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigationStack from './src/navigation/MainNavigation';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigationStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
