import * as actionTypes from './action-types';

export function loginSuccess() {
  return {
    type: actionTypes.UPDATE_NAVIGATION_LOGIN_SUCCESS
  }
};

export function logoutSuccess() {
  return {
    type: actionTypes.UPDATE_NAVIGATION_LOGOUT_SUCCESS
  }
};