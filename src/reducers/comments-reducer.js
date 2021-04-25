import * as actionTypes from '../actions/action-types';

const initialState = {
  total: 0,
  comments: []
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case actionTypes.UPDATE_COMMENTS_INSERT:
      const comments = state.comments.concat([action.comment]);
      const total = state.comments.total + 1;
      return { total: total, comments: comments };
    case actionTypes.UPDATE_COMMENTS_SUCCESS:
      return Object.assign({}, { total: action.total, comments: action.comments });
    case actionTypes.UPDATE_COMMENTS_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;