import * as actionTypes from './action-types';

export function getArticlesSuccess(articles) {
  return {
    type: actionTypes.UPDATE_ARTICLES_SUCCESS,
    articles
  }
};

export function getArticlesFail() {
  return {
    type: actionTypes.UPDATE_ARTICLES_FAIL,
  }
};