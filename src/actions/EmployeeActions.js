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
  console.log(name, phone, shift);
};

