import * as actionTypes from '../actions/action-types';

const initialState = [
  {
    img: "",
    title: "Loading articles...",
    description: "This might take a moment."
  }
];

function reducer(state = initialState, action) {
  return state;
}

export default reducer;