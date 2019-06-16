import React from 'react';
import { SafeAreaView } from 'react-native';
import Router from 'app/router/Router';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(Router);
const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppContainer />
  </SafeAreaView>
);
export default App;
