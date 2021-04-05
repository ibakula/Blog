import { combineReducers } from 'redux';

// reducers
import searchReducer from './search-reducer';
import carouselReducer from './carousel-reducer';

var reducers = combineReducers({
  searchState: searchReducer,
  carouselState: carouselReducer
});

export default reducers;