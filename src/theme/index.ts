import { DefaultTheme, Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  c3DD598: '#3DD598',
  cE5E5E5: '#E5E5E5',
  cDADBE7: '#DADBE7',
};

export const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

export const fontFamily = {
  Bold: 'Montserrat-Bold',
  Regular: 'Montserrat-Regular',
  Medium: 'Montserrat-Medium',
  SemiBold: 'Montserrat-SemiBold',
  Italic: 'Montserrat-Italic',
  Light: 'Montserrat-Light',
};

export const fontSize = {
  f8: RFValue(8),
  f9: RFValue(9),
  f10: RFValue(10),
  f11: RFValue(11),
  f12: RFValue(12),
  f13: RFValue(13),
  f14: RFValue(14),
  f15: RFValue(15),
  f16: RFValue(16),
  f17: RFValue(17),
  f18: RFValue(18),
  f19: RFValue(19),
  f20: RFValue(20),
  f21: RFValue(21),
  f22: RFValue(22),
  f23: RFValue(23),
  f24: RFValue(24),
  f25: RFValue(25),
  f26: RFValue(26),
  f27: RFValue(27),
  f28: RFValue(28),
  f29: RFValue(29),
  f30: RFValue(30),
  f31: RFValue(31),
  f32: RFValue(32),
  f33: RFValue(33),
};

export const globalStyles = StyleSheet.create({
  removeDefaultMargin: {
    margin: undefined,
    marginHorizontal: undefined,
    marginVertical: undefined,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginStart: undefined,
    marginEnd: undefined,
  },
  removeDefaultPadding: {
    padding: undefined,
    paddingHorizontal: undefined,
    paddingVertical: undefined,
    paddingTop: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingStart: undefined,
    paddingEnd: undefined,
  },
  // remove all border react native style
  removeBorder: {
    borderWidth: undefined,
    borderLeftWidth: undefined,
    borderRightWidth: undefined,
    borderTopWidth: undefined,
    borderBottomWidth: undefined,
  },
  defaultShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    aspectRatio: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  debugger: {
    position: 'absolute',
    width: 1,
    backgroundColor: 'red',
    top: 0,
    bottom: 0,
  },
});
