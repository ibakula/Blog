import * as actionTypes from './action-types';

export function getRecommendedArticlesSuccess(articles) {
  return {
    type: actionTypes.UPDATE_RECOMMENDED_SECTION_SUCCESS,
    articles
  };
};

export function getRecommendedArticlesFail() {
  return {
    type: actionTypes.UPDATE_RECOMMENDED_SECTION_FAIL
  }
};