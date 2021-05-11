import * as actions from '../actions/recommended-actions';
import * as utility from './api-utility';
import store from '../store';

export function getRecommendedArticles(categoryId) {
  return utility.getDataForContainerType('/api', 'posts/recommended', categoryId)
  .then(response => {
    store.dispatch(actions.getRecommendedArticlesSuccess(response.data));
    return response.data;
  })
  .catch(error => {
    // actions.getRecommendedArticlesFail();
    return Promise.reject(error);
  });
};