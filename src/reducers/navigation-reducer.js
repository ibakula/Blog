import * as actionTypes from '../actions/action-types';

const initialState = {
  loggedIn: (localStorage.getItem("email") != null)
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_NAVIGATION_LOGIN_SUCCESS:
      return { loggedIn: true };
    case actionTypes.UPDATE_NAVIGATION_LOGOUT_SUCCESS:
      return { loggedIn: false };
  }

  return state;
}

export default reducer;