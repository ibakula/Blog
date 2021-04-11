import { combineReducers } from 'redux';

// reducers
import searchReducer from './search-reducer';
import carouselReducer from './carousel-reducer';
import articleReducer from './article-reducer';

var reducers = combineReducers({
  searchState: searchReducer,
  carouselState: carouselReducer,
  articleState: articleReducer
});

export default reducers;