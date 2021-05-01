import * as actionTypes from '../actions/action-types';

const initialState = [
];

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.UPDATE_CAROUSEL_SUCCESS:
      return action.articles.slice();
    case actionTypes.UPDATE_CAROUSEL_FAIL:
      return initialState;
  }
  return state;
}

export default reducer;