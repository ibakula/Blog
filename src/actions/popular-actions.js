import * as actionTypes from './action-types';

function getPopularArticlesSuccess(articles) {
  return {
    type: actionTypes.UPDATE_POPULAR_SUCCESS,
    articles
  };
}

function getPopularArticlesFail() {
  return {
    type: actionTypes.UPDATE_POPULAR_FAIL
  }
}