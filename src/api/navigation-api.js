import * as utility from './api-utility';
import * as actions from '../actions/search-actions';
import store from '../store';

export function getTermsCount(sectionName, term) {
  return utility.postData(`/api/${sectionName}/search/1/count`, term)
  .then(({ data }) => {
    return data.count;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function searchForTerm(sectionName, term, fromId, resultsCountLimit, currentListItemCount) {
  return utility.postData(`/api/${sectionName}/search/${fromId}/${resultsCountLimit}`, term)
  .then(({ data }) => {
    store.dispatch(actions.getSearchResultsSuccess(data, currentListItemCount));
    return data;
  })
  .catch(error => {
    // store.dispatch(actions.getSearchResultsFail());
    return Promise.reject(error);
  });
};