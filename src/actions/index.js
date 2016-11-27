import firebase from 'firebase';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED
} from './types.js';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // Async action
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        // Dispatched when async request is completed
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};

