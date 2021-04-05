import * as actionTypes from '../actions/action-types';

const initialState = [
  {
    img: "https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg",
    title: "This is some title",
    description: "This is some description"
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/12/14/09/41/new-zealand-3018634_960_720.jpg",
    title: "This is some title",
    description: "This is some description"
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/02/19/11/25/supreme-court-building-1209701_960_720.jpg",
    title: "This is some title",
    description: "This is some description"
  }
];

function reducer(state = initialState, action) {
  return state;
}

export default reducer;