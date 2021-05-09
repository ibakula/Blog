import * as utility from './api-utility';
import * as actions from '../actions/search-actions';
import store from '../store';

export function getTermsResultsCount(sectionName, term) {
  return utility.postData(`http://127.0.0.1:80/api/${sectionName}/search/count`, term)
  .then(({ data }) => {
    return data.count;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function searchForTerm(sectionName, term, type, id, resultsCountLimit) {
  if (type != 'fromId' && type != 'toId' && type != 'none') {
    return Promise.reject(new Error("Search type parameter should either be to-or -fromId"));
  }

  let url = `http://127.0.0.1:80/api/${sectionName}/search/${type}/${id}/${resultsCountLimit}`;
  if (type == 'none') {
    url = `http://127.0.0.1:80/api/${sectionName}/search`;
  }

  return utility.postData(url, term)
  .then(({ data }) => {
    return data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function updateSearchResultsState(results, total, type = 1) {
  type == 1 ? store.dispatch(actions.getSearchResultsSuccess(results, total)) :
  store.dispatch(actions.getSearchResultsFail());
};