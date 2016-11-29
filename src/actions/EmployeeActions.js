import firebase from 'firebase';
import {
  EMPLOYEE_FORM_UPDATE
} from './types';

// used for all updates in the employee form
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_FORM_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};

