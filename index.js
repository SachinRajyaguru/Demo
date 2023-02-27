import { colors } from '@theme';
import { AppRegistry, LogBox, Platform, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import KeyboardManager from 'react-native-keyboard-manager';
import App from './App';
import { name as appName } from './app.json';

if (Platform.OS === 'ios') {
  KeyboardManager.setShouldShowToolbarPlaceholder(true);
  KeyboardManager.setEnable(true);
  KeyboardManager.setToolbarPreviousNextButtonEnable(true);
  KeyboardManager.setToolbarTintColor(colors.black);
}
LogBox.ignoreAllLogs();
ScrollView.defaultProps = {
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  bounces: false,
  keyboardDismissMode: 'on-drag',
};

AppRegistry.registerComponent(appName, () => App);
