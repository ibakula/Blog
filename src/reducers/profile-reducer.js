import * as actionTypes from '../actions/action-types';

const initialState = {
  userData: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_DATA_SUCCESS:
      return Object.assign({}, { userData: action.userData });
    case actionTypes.UPDATE_PROFILE_DATA_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;