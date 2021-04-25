import * as utility from './api-utility';
import * as actions from '../actions/comments-actions';
import store from '../store';

export function getCommentsCount(articleId) {
  return utility.getDataForContainerType('http://127.0.0.1:80/api', `comments/post/${articleId}/count`)
  .then(response => {
    return response.data.count;
  })
  .catch(error => {
    //actions.getCommentsFail();
    return Promise.reject(error);
  });
};

export function getComments(articleId, commentId, limit, commentCount, type = 'fromId') {
  return utility.getDataForContainerType('http://127.0.0.1:80/api', 'comments/post', articleId, type, commentId, limit)
  .then(({ data }) => {
    let comments = JSON.stringify(data);
    comments = JSON.parse(comments);
    let promise = null;
    comments.forEach((comment, index) => {
      if (promise != null) {
        promise = promise.then(() => { 
          return utility.getDataForContainerType('http://127.0.0.1:80/api', 'users', comment.user_id)
          .then(response => {
            comment.author = `${response.data.first_name} ${response.data.last_name}`;
          }); 
        });
      }
      else {
        promise = utility.getDataForContainerType('http://127.0.0.1:80/api', 'users', comment.user_id)
        .then(response => {
          comment.author = `${response.data.first_name} ${response.data.last_name}`;
        });
      }

      if (index == (comments.length-1)) {
        promise = promise.then(() => comments);
      }
    });

    return promise === null ? Promise.resolve(comments) : promise;
  })
  .then(comments => {
    store.dispatch(actions.getCommentsSuccess(comments, commentCount));
    return comments;
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