import * as actions from './action-types';

export function displayResults(results) {
  return {
    type: actions.DISPLAY_RESULTS,
    results
  }
};

export function initSearch() {
  return {
    type: actions.INIT_SEARCH_FN
  }
};