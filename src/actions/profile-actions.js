import * as actionTypes from './action-types';

export function getProfileSuccess(userData) {
  return {
    type: actionTypes.UPDATE_PROFILE_DATA_SUCCESS,
    userData
  };
};

export function getProfileFailed() {
  return {
    type: actionTypes.UPDATE_PROFILE_DATA_FAIL
  };
};