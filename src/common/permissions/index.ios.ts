import {
  check,
  RESULTS,
  request,
  IOSPermission,
} from 'react-native-permissions';
import { Alert, Linking } from 'react-native';

// Understanding permission flow

const requestPermissionAlert = (permission: IOSPermission) => {
  Alert.alert(
    permission,
    '',
    [
      { text: "Don't Allow", style: 'cancel' },
      { text: 'Allow', onPress: () => Linking.openSettings() },
    ],
    {
      userInterfaceStyle: 'light',
    },
  );
};

const getPermission = (permission: IOSPermission) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const checkPermissionStatus = await check(permission);

    // Is the feature available on this device ?
    if (RESULTS.UNAVAILABLE === checkPermissionStatus) {
      reject('the feature is not available on this device');
    } else if (RESULTS.GRANTED === checkPermissionStatus) {
      resolve(true);
      // Is the permission requestable ?
    } else if (RESULTS.DENIED === checkPermissionStatus) {
      const requestPermissionStatus = await request(permission);
      if (requestPermissionStatus === RESULTS.GRANTED) {
        resolve(true);
      }
    } else {
      requestPermissionAlert(permission);
    }
  });
};

export { getPermission };
export default getPermission;
