import * as utility from './api-utility';
import * as actions from '../actions/comments-actions';

export function getComments(articleId) {
  return utility.getDataForContainerType('http://127.0.0.1:80', 'comments/post', articleId)
  .then(response => {
    actions.getCommentsSuccess(response.data);
    return response.data;
  })
  .catch(error => {
    actions.getCommentsFail();
    return Promise.reject(error);
  });
};