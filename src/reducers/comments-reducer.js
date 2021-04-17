import * as actionTypes from '../actions/action-types';

const initialState = {
  comments: []
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case actionTypes.UPDATE_COMMENTS_SUCCESS:
      return Object.assign({}, { comments: [...action.comments] });
    case actionTypes.UPDATE_COMMENTS_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;