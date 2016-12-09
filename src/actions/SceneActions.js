import { Actions } from 'react-native-router-flux';
import SHOW_LOGIN from './types.js';

export const showLogin = () => {
  return () => {
  Actions.auth();
  };
};
