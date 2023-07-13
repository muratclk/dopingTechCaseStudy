import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {store} from '@store/store';
import {Provider} from 'react-redux';
import MainStack from '@routes/index';
import {StatusBar, StyleSheet} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <ActionSheetProvider>
          <SafeAreaProvider>
            <StatusBar barStyle="light-content" />
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </ActionSheetProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
