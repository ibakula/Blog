import * as actions from './action-types';

export function getSearchResultsSuccess(results, totalCount) {
  return {
    type: actions.UPDATE_SEARCH_RESULTS_SUCCESS,
    total: totalCount,
    results
  }
};

export function getSearchResultsFail() {
  return {
    type: actions.UPDATE_SEARCH_RESULTS_FAIL
  }
};