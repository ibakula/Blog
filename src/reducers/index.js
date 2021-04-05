import { combineReducers } from 'redux';

// reducers
import searchReducer from './search-reducer';

var reducers = combineReducers({
  searchState: searchReducer
});

export default reducers;