import * as actionTypes from '../actions/action-types';

const initialState = {
  results: []
};

function searchReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.DISPLAY_RESULTS:
      return Object.create({}, state, { results: action.results });
    
    case actionTypes.INIT_SEARCH_FN:
      return initialState;
  }

  return state;
}

export default searchReducer;