import React from 'react';
import { StyleSheet, View } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import FlashMessage from 'react-native-flash-message';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthLoader } from '@components';

export type Props = {};

const App: React.FC<Props> = ({}) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          <View style={styles.main}>
            <AppNavigation />
            <FlashMessage />
          </View>
          <AuthLoader />
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default gestureHandlerRootHOC(App);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
