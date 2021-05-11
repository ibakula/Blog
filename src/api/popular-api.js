import * as actions from '../actions/popular-actions';
import * as utility from './api-utility';
import store from '../store';

export function getPopularArticles() {
  return utility.getDataForContainerType('/api', 'posts/popular')
  .then(response => {
      store.dispatch(actions.getPopularArticlesSuccess(response.data));
      return response.data;
    }
  )
  .catch(error => {
    //store.dispatch(actions.getPopularArticlesFail());
    return Promise.reject(error); 
  });
}