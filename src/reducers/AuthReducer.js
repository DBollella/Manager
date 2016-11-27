import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // Creates new object with everything from 
      // state and replaces email property with action.payload
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
