import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
