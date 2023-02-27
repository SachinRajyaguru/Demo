import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { fontFamily } from '@theme';
import { ms } from 'react-native-size-matters';

type screenOptionsType =
  | StackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => StackNavigationOptions)
  | undefined;

const screenOptions: screenOptionsType = {
  title: '',
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  gestureEnabled: false,
  headerBackImage: () => null,
  headerBackTitle: 'Back',
  headerBackTitleStyle: {
    marginStart: ms(16),
    fontFamily: fontFamily.Regular,
  },
};

export { screenOptions };
