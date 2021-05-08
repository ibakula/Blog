import * as utility from './api-utility';
import * as actions from '../actions/search-actions';
import store from '../store';

export function getTermsResultsCount(sectionName, term) {
  return utility.postData(`http://127.0.0.1:80/api/${sectionName}/search/1/count`, term)
  .then(({ data }) => {
    return data.count;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function searchForTerm(sectionName, term, fromId, resultsCountLimit) {
  return utility.postData(`http://127.0.0.1:80/api/${sectionName}/search/${fromId}/${resultsCountLimit}`, term)
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