import * as utility from './api-utility';
import * as actions from '../actions/comments-actions';
import store from '../store';

export function getComments(articleId) {
  return utility.getDataForContainerType('http://127.0.0.1:80/api', 'comments/post', articleId)
  .then(response => {
    store.dispatch(actions.getCommentsSuccess(response.data));
    return response.data;
  })
  .catch(error => {
    //actions.getCommentsFail();
    return Promise.reject(error);
  });
};

export function postComment(articleId, text) {
  const data = {
    postId: articleId,
    userId: localStorage.getItem("id"),
    text: text,
  };

  return utility.postData('https://127.0.0.1:80/api/comments', data)
  .then(response => {
    if (response.data.result == "Failed!") {
      const reason = 'reason' in response.data ? response.data.reason : "Reason is unknown.";
      return Promise.reject(new Error(reason));
    }
  })
  .catch(error => Promise.reject(error));
}