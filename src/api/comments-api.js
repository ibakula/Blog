import * as utility from './api-utility';
import * as actions from '../actions/comments-actions';
import store from '../store';

export function getComments(articleId) {
  return utility.getDataForContainerType('http://127.0.0.1:80/api', 'comments/post', articleId)
  .then(({ data }) => {
    let comments = JSON.stringify(data);
    comments = JSON.parse(comments);
    let promise = null;
    comments.forEach((comment, index) => {
      if (promise != null) {
        promise = promise.then((response) => {
          comment.author = `${response.data.first_name} ${response.data.last_name}`;
          return utility.getDataForContainerType('http://127.0.0.1:80/api', 'users', comment.user_id);
        });
      }
      else {
        promise = utility.getDataForContainerType('http://127.0.0.1:80/api', 'users', comment.user_id);
      }

      if (index == (comments.length-1)) {
        promise = promise.then(() => comments);
        store.dispatch(actions.getCommentsSuccess(comments));
      }
    });
    return promise;
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