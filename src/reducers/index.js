import { combineReducers } from 'redux';

// reducers
import searchReducer from './search-reducer';
import carouselReducer from './carousel-reducer';
import articleReducer from './article-reducer';
import popularArticlesReducer from './popular-section-reducer';
import commentsReducer from './comments-reducer';
import recommendedArticlesReducer from './recommended-section-reducer';
import profileReducer from './profile-reducer';
import navigationReducer from './navigation-reducer';

var reducers = combineReducers({
  searchState: searchReducer,
  carouselState: carouselReducer,
  articleState: articleReducer,
  popularState: popularArticlesReducer,
  commentsState: commentsReducer,
  recommendedState: recommendedArticlesReducer,
  profileState: profileReducer,
  navigationState: navigationReducer
});

export default reducers;