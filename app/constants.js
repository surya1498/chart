/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import {useIsEmulator} from 'react-native-device-info';

export const BASE_URL = 'http://localhost:2222/';

export const IS_IOS = Platform.OS === 'ios';
export const isEmulator = () => {
  return useIsEmulator();
};

export const runningOn = isEmulator
  ? IS_IOS
    ? 'Simulator'
    : 'Emulator'
  : 'Device';
