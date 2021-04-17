import * as actionTypes from './action-types';

function getRecommendedArticlesSuccess(articles) {
  return {
    type: actionTypes.UPDATE_RECOMMENDED_SECTION_SUCCESS,
    articles
  };
}

function getRecommendedArticlesFail() {
  return {
    type: actionTypes.UPDATE_RECOMMENDED_SECTION_FAIL
  }
}