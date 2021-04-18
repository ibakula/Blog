import * as actions from '../actions/article-actions';
import * as utility from './api-utility';
import store from '../store';

export function getArticles(id) {
  return utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts', id)
  .then(response => {
    const articles = [];
    if ((Array.isArray(response.data) && response.data.length < 1) 
      || (id != null && !('id' in response.data))) {
      return articles;
    }
    
    if (id != null) {
      return finalizeData(response.data, true)
        .then(article => {
          articles.push(article);
          store.dispatch(actions.getArticlesSuccess(articles));
          return articles;
        });      
    }
    else {
      return fetchArticlesFromId(response.data.id).then(responses => {
        responses.forEach(response => {
          finalizeData(response.data).then((article) => {
            articles.push(Object.assign({}, article));
          });
        })
      }).then(() => {
        store.dispatch(actions.getArticlesSuccess(articles));
        return articles;
      });
    }
  })
  .catch(error => {
    //store.dispatch(actions.getArticlesFail());
    return Promise.reject(error);
  });
};

export function resetData() {
  store.dispatch(store.dispatch(actions.getArticlesFail()));
}

/**
 * Utility functions
 */

function finalizeData(article, fetchAuthor = false) {
  const textData = splitTextData(article.text);
  const nArticle = Object.assign({}, article);
  nArticle.img = textData.img;
  nArticle.text = textData.text;
  delete nArticle.views;

  return (fetchAuthor ? utility.getDataByIdFromApiWrapper('http://localhost:80/api/users', article.authorId)
    .then(response => {
      nArticle.author = `${response.data.first_name} ${response.data.last_name}`;
      return nArticle;
    }) : Promise.resolve(nArticle));
}

function splitTextData(text) {
  const data = {
    img: '',
    text
  }

  const start = data.text.search("<img");
  if (start > -1) {
    const end = data.text.search("/>");
    data.img = data.text.slice(start, end+2);
    if (start > 0) {
      data.text = text.slice(0, start);
      data.text = text.slice(end);
    }
    else {
      data.text = data.text.slice(end+2);
    }
  }

  return data;
}

function fetchArticlesFromId(startId) {
  let state = utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts', startId);
  let states = [];
  for (let i = startId-1; i > 0 && i > (startId-5); --i) {
    states.push(state);
    state = state.then(() => utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts', i));
  }

  return Promise.all(states);
}