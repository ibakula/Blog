import * as actionTypes from './action-types';

export function getPopularArticlesSuccess(articles) {
  return {
    type: actionTypes.UPDATE_POPULAR_SUCCESS,
    articles
  };
};

export function getPopularArticlesFail() {
  return {
    type: actionTypes.UPDATE_POPULAR_FAIL
  }
};