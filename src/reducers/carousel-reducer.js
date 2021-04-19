import * as actionTypes from '../actions/action-types';

const initialState = [
  {
    img: "",
    title: "Loading articles...",
    description: "This might take a moment."
  }
];

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.UPDATE_CAROUSEL_SUCCESS:
      return action.articles.slice();
    case actionTypes.UPDATE_CAROUSEL_FAIL:
      return [{ img: "", 
        title: "Sorry, couldn't load content.", 
        description: "Looks like content is unavailable." 
      }];
  }
  return state;
}

export default reducer;