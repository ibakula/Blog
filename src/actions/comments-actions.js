import * as actionTypes from './action-types';

export function getCommentsSuccess(comments) {
  return {
    type: actionTypes.UPDATE_COMMENTS_SUCCESS,
    comments
  };
};

export function insertComment(comment) {
  return {
    type: action.UPDATE_COMMENTS_INSERT,
    comment
  }
}

export function getCommentsFail() {
  return {
    type: actionTypes.UPDATE_COMMENTS_FAIL
  };
};