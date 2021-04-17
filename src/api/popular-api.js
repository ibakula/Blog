import * as actions from '../actions/popular-actions';
import getDataForContainerType from './api-utility';
import store from '../store';

export default function getPopularArticles() {
  return getDataForContainerType('http://127.0.0.1:80', 'popular')
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