import * as actionTypes from './action-types';

function getCommentsSuccess(articles) {
  return {
    type: actionTypes.UPDATE_ARTICLES_SUCCESS,
    articles
  };
}

function getCommentsFail() {
  return {
    type: actionTypes.UPDATE_ARTICLES_FAIL
  };
}