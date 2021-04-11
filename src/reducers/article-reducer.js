import * as actionTypes from '../actions/action-types';

const initialState = {
  articles: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_ARTICLES_SUCCESS:
      const results = [];
      action.results.map(item => {
        results.push({...item});
      });
      return { articles: results };
    case actionTypes.UPDATE_ARTICLES_FAIL:
      return initialState;
  }

  return state;
}

export default reducer;