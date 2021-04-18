import * as actionTypes from './action-types';

export function getCommentsSuccess(articles) {
  return {
    type: actionTypes.UPDATE_ARTICLES_SUCCESS,
    articles
  };
};

export function getCommentsFail() {
  return {
    type: actionTypes.UPDATE_ARTICLES_FAIL
  };
};