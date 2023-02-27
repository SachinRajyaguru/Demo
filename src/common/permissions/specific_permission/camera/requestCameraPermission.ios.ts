import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const requestCameraPermission = async () => {
  const cameraPermission = await check(PERMISSIONS.IOS.CAMERA);

  if (cameraPermission === RESULTS.UNAVAILABLE) {
    return false;
  }

  if (cameraPermission === RESULTS.DENIED) {
    const result = await request(PERMISSIONS.IOS.CAMERA);

    if (result === RESULTS.DENIED) {
      return false;
    }
  }

  return true;
};
export {requestCameraPermission};
export default requestCameraPermission;
