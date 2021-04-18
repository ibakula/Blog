import * as actions from '../actions/recommended-actions';
import utility from './api-utility';

export default function getRecommendedArticles(categoryId) {
  return utility.getDataForContainerType('http://127.0.0.1.80', 'posts/recommended', categoryId)
  .then(response => {
    actions.getRecommendedArticlesSuccess(response.data);
    return response.data;
  })
  .catch(error => {
    // actions.getRecommendedArticlesFail();
    return Promise.reject(error);
  });
};