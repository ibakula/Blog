import * as actionTypes from '../actions/action-types';

const initialState = {
  total: 0,
  results: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.UPDATE_SEARCH_RESULTS_SUCCESS:
      return { total: action.total, results: action.results };
    
    case actionTypes.UPDATE_SEARCH_RESULTS_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;