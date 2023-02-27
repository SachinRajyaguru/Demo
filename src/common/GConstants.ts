import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';

export const cameraPermission = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
});
export const galleryPermission = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
});
export const AsyncStorageKeys = {
  USER_TOKEN: 'USER_TOKEN',
  USER_ID: 'USER_ID',
};
export const previousRouteName = 'previousRouteName';

export const KEYBOARD_TYPE = {
  DEFAULT: 'default',
  NUMBER_PAD: 'number-pad',
  DECIMAL_PAD: 'decimal-pad',
  NUMERIC: 'numeric',
  EMAIL_ADDRESS: 'email-address',
  PHONE_PAD: 'phone-pad',
  URL: 'url',
  iOS: {
    ASCII_CAPABLE: 'ascii-capable',
    NUMBERS_AND_PUNCTUATION: 'numbers-and-punctuation',
    NAME_PHONE_PAD: 'name-phone-pad',
    TWITTER: 'twitter',
    WEB_SEARCH: 'web-search',
  },
  Android: {
    VISIBLE_PASSWORD: 'visible-password',
  },
};
export const TYPE_OF_ACCESS = Object.freeze({
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
});
