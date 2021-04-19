import * as actionTypes from './action-types';

export function getCarouselContentSuccess(articles) {
  return {
    type: actionTypes.UPDATE_CAROUSEL_SUCCESS,
    articles
  };
};

export function getCarouselContentFail() {
  return {
    type: actionTypes.UPDATE_CAROUSEL_FAIL
  };
};